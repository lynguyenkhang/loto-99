import { setAlert } from '../features/buttons'
import { addRoom, clearRoom, updateTypeUserInFirestore } from '../features/user'
import db from '../firebase'
import { generateID } from '../functions/functions'

const rooms = db.collection('rooms')


export const onSnapShotTypeUser = store => next => action => {
    switch(action.type){
        case updateTypeUserInFirestore.type: {
            const state = store.getState()
            const { currentRoom, name } = state.user

            const unsubscribe = rooms.doc(currentRoom).onSnapshot(doc => {
                const { Members } = doc.data()
                const filterArr = Members.filter(mem => mem.name === name)
                if(filterArr.length !== 0){
                     const { type } = filterArr[0]
                    action.payload = type
                } else action.payload = ''

                if(store.getState().user.currentRoom.length === 0) unsubscribe()

                next(action)
            })
        }; break;
        default: next(action); break;
    }
}



export const clearUserInFirestore = store => next => action => {
    if(action.type === clearRoom.type){
        const state = store.getState()
        const { currentRoom, name } = state.user
        const { Members } = state.room.firestoreData

        let newMembersList = [...Members].filter(mem => mem.name !== name)
        if(newMembersList.length !== 0){
            const newHost = { name: newMembersList[0].name, type: 'host'}
            newMembersList = [newHost, ...newMembersList.slice(1)]
        }
        rooms.doc(currentRoom).update({ Members: newMembersList})
    }
    next(action)
}




export const addRoomMiddleware = store => next => action => {
    if(action.type === addRoom.type){
        if(action.payload.length > 0) checkValidRoom(store, next, action)
        else createNewRoom(store, next, action)
    } else next(action)
}



const checkValidRoom = async (store, next, action) => {
    const inputedID = action.payload
    const doc = await rooms.doc(inputedID).get()
    const {name} = store.getState().user
    let error = '';

    if(doc.exists) {
        const { Members } = doc.data()
        // check if there is a same name member.
        let validName = true;
        Members.map(member => validName = member.name === name ? false : validName)

        if(validName){
            rooms.doc(inputedID).update({
                Members: [...Members, {
                    name: name,
                    type: 'member'
            }]}).then().catch(err => console.log(err))

            // don't need update TypeUser
            // because onSnapShot in LotoProvider
            // update realtime
            next(action)

        } else error = 'Thành viên trong phòng đã sử dụng tên này'
    } else error = 'Mã phòng không hợp lệ'
    action = { type: setAlert.type, payload: error}
    next(action)
}

const createNewRoom = async (store, next, action) => {
    let newRoomID;
    const {name} = store.getState().user
    let isExisted = true;

    // check newRoomID is not exist  ?
    do {
        newRoomID = generateID(4);
        isExisted = (await rooms.doc(newRoomID).get()).exists
    }
    while(isExisted)

    rooms.doc(newRoomID).set({
        CurrentNumber: 0,
        Members: [{
            name: name,
            type: 'host'
        }],
        NumberList: [],
        Winners: [],
    })
    action.payload = newRoomID
    next(action)
}