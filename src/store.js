import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'

import buttonsReducer from './features/buttons'
import roomReducer from './features/room'
import userReducer from './features/user'
import checkActiveNumber from './middlewares/buttons'
import {changeCurrentNumber, fetchFirestoreRoom, resetFirestoreRoom, addFirestoreWinners} from  './middlewares/room'
import {onSnapShotTypeUser, addRoomMiddleware, clearUserInFirestore } from './middlewares/user'




const rootReducer = combineReducers({
    user: userReducer,
    room: roomReducer,
    buttons: buttonsReducer,
})

export default configureStore({
    reducer: rootReducer,
    middleware: [addFirestoreWinners, resetFirestoreRoom, changeCurrentNumber, checkActiveNumber, onSnapShotTypeUser, fetchFirestoreRoom , addRoomMiddleware, clearUserInFirestore]
})
