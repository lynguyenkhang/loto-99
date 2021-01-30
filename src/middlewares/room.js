import { clearTable } from '../features/buttons'
import { fetchRoom, randomNumber, playAgain,addWinners } from '../features/room'


import db from '../firebase'
const rooms = db.collection('rooms')

export const fetchFirestoreRoom = store => next => action => {
    if(action.type === fetchRoom.type){
            console.log('fetchFirestoreRoom')
            const currentRoom = action.payload
            const document = rooms.doc(currentRoom)
            const unsubscribe = document.onSnapshot(doc => {
                action.payload = doc.data()
                // const { NumberList } = doc.data()
                // if(NumberList.length === 0) action.type = clearTable.type
                if(store.getState().user.currentRoom.length === 0) unsubscribe()
                next(action)
            })
    } else next(action)
}

export const changeCurrentNumber = store => next => action => {
    if(action.type === randomNumber.type){
        const state = store.getState()
        const { currentRoom } = state.user
        const { NumberList } =  state.room.firestoreData

        if(NumberList.length < 90){
            let inloop = true;
            while(inloop){
              const result = Math.floor(Math.random() * (90 - 1 + 1) + 1);
              if(NumberList.indexOf(result) === -1){
                const document = rooms.doc(currentRoom)
                document.update({
                  CurrentNumber: result,
                  NumberList: [...NumberList, result]
                })
                inloop = false
        }}}
    }
    next(action)

}



export const resetFirestoreRoom = store => next => action => {
    if(action.type === playAgain.type){
        const state = store.getState()
        const { currentRoom } = state.user
        const document = rooms.doc(currentRoom)
        document.update({
            CurrentNumber: 0,
            NumberList: [],
            Winners: [],
        })
        action.type = clearTable.type
        next(action)
    } else next(action)
}

export const addFirestoreWinners = store => next => action => {
    if(action.type === addWinners.type){
        const state = store.getState()
        const { currentRoom, name } = state.user
        const { Winners } = state.room.firestoreData
        const document = rooms.doc(currentRoom)
        document.update({
            Winners: [...Winners, name]
        })
        next(action)
    } else next(action)
}