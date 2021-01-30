import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: 'user',
    initialState: {
        name: '',
        currentRoom: '',
        type: ''
    },
    reducers: {
        addName(state, action){
            state.name = action.payload
        },
        addRoom(state, action){
            state.currentRoom = action.payload
        },
        updateTypeUser(state, action) {
            state.type = action.payload
        },
        updateTypeUserInFirestore(state, action){
            state.type = action.payload
        },
        clearRoom(state){
            state.currentRoom = '';
            state.type = '';
        }
    }
})

export const { addName, addRoom, updateTypeUser, updateTypeUserInFirestore, clearRoom } = userSlice.actions
export default userSlice.reducer