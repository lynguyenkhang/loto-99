import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import buttonsReducer from './features/buttons'
import roomReducer from './features/room'
import userReducer from './features/user'
import checkActiveNumber from './middlewares/buttons'
import { addFirestoreWinners, changeCurrentNumber, fetchFirestoreRoom, resetFirestoreRoom } from './middlewares/room'
import { addRoomMiddleware, clearUserInFirestore, onSnapShotTypeUser } from './middlewares/user'





const rootReducer = combineReducers({
    user: userReducer,
    room: roomReducer,
    buttons: buttonsReducer,
})

export default configureStore({
    reducer: rootReducer,
    middleware: [addFirestoreWinners, resetFirestoreRoom, changeCurrentNumber, checkActiveNumber, onSnapShotTypeUser, fetchFirestoreRoom , addRoomMiddleware, clearUserInFirestore]
})
