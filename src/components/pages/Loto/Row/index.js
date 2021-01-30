import React,{useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addWinners } from '../../../../features/room'
import './index.css'

import Number from '../Number'



const Row = ({row, rowOrder}) => {

    const [ beActived, setBeActived ] = useState(false)
    const table = useSelector(state => state.buttons.table)

    const dispatch = useDispatch()

    const endingGame = () => {
        dispatch(addWinners())
    }


    useEffect(() => {
        let count = 0;
        row.map(({active}) => {
            count  = active ? count + 1 : count;
        })
        if((count === 5) && beActived === false) {
            setBeActived(true)
            endingGame();
        }
        if(count === 0) setBeActived(false)
    },[table])


    return (
        <div
            className="Row"
            style={{
                borderTop: `${rowOrder === 0 ? "1px solid #555" : "none"}`,
            }}
        >
            {row.map((number, index) => <Number number={number.number} active={number.active} colOrder={index} key={index} rowOrder={rowOrder} />)}
        </div>
    )
}

export default Row;