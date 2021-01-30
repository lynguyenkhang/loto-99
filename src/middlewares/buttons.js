import { activeNumber } from "../features/buttons"


const checkActiveNumber = store => next => action => {
    if(action.type === activeNumber.type){

        const { row, col } = action.payload
        const state = store.getState()
        const {NumberList} =  state.room.firestoreData
        const { table } = state.buttons
        let allowActive = false

        let temp_table = [...table]
        let choosenNumber = temp_table[row][col]

        if(choosenNumber.number !== " ") {
            if((NumberList.indexOf(choosenNumber.number) === -1)){
                allowActive = false
            } else allowActive = true
            // allowActive = true
        }
        action.payload = { row, col, allowActive}
    }
    next(action)
}

// const checkClearActiveNumber = store => next => action => {
//     if(action.type === ){}
// }

export default checkActiveNumber