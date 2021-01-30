import { createSlice } from '@reduxjs/toolkit'

const roomSlice = createSlice({
    name: 'room',
    initialState: {
        firestoreData: {
            CurrentNumber: 0,
            Members: [],
            NumberList: [],
            Winners: []
        }
    },
    reducers: {
        fetchRoom(state, action){
            console.log('just fetch firestore !')
            state.firestoreData = { ...action.payload}
        },
        randomNumber(state, action){
            console.log('just random number !')
        },
        playAgain(state, action){
            console.log('just play again !')
        },
        addWinners(state, action){
            console.log(`you win !!!`)
        },
        clearFirestoreData(state){
            state.firestoreData = {
                CurrentNumber: 0,
                Members: [],
                NumberList: [],
                Winners: []
            }
        }

    }
})

export const { fetchRoom, randomNumber, playAgain, addWinners, clearFirestoreData } = roomSlice.actions
export default roomSlice.reducer