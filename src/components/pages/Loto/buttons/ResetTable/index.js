import React, { useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { resetTable } from '../../../../../features/buttons'


import './index.css'

const ResetTableBtn = () => {
    const [ rotateDeg, setRotateDeg] = useState(0)
    const NumberList = useSelector(state => state.room.firestoreData.NumberList)
    const dispatch = useDispatch()
    const resetingTable = () => dispatch(resetTable())

    return (
        <div onClick={() => {
            setRotateDeg(rotateDeg + 360)
            resetingTable()}}
        className={`ResetTableBtn__resetBtn ${NumberList.length ? 'ResetTableBtn__hideResetBtn' : ''}`}
        style={{transform: `rotate(${rotateDeg}deg) scale(1)`}}>
    </div>
    )
}


export default ResetTableBtn