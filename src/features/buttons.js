import { createSlice } from '@reduxjs/toolkit'
import createTable from '../functions/createTable'
import clearActiveArr from '../functions/functions'

const buttonsSlice = createSlice({
    name: 'buttons',
    initialState: {
        table: [],
        colors: "#847996",
        alert: { content: '', thisVaribleToTrigger: false}
    },
    reducers: {
        changeColors(state, action){
            state.colors = action.payload
        },
        resetTable(state) {
            const table = createTable()
            state.table = [...table]
        },
        activeNumber(state, action){
            const { row, col, allowActive } = action.payload
            let temp_table = [...state.table]
            let choosenNumber = temp_table[row][col]

            if(allowActive){
                choosenNumber.active = !choosenNumber.active
                state.table = [...temp_table]
                state.alert = {content: '', thisVaribleToTrigger: false}
            } else {
                state.alert.content = `số ${choosenNumber.number} chưa được kêu`
                state.alert.thisVaribleToTrigger = !state.alert.thisVaribleToTrigger
            }
        },
        clearTable(state){
            const temp_table = [...state.table] 
            const clearTable =  clearActiveArr(temp_table)
            state.table = clearTable
        },
        setAlert(state,action){
            state.alert.content = action.payload
            state.alert.thisVaribleToTrigger = !state.alert.thisVaribleToTrigger
        }
    }
})

export const { changeColors, resetTable, activeNumber, clearTable, setAlert } = buttonsSlice.actions
export default buttonsSlice.reducer