import React, { useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { resetTable } from '../../../../features/buttons'

import Row from '../Row/'
import './index.css'

function Table() {

    const table =  useSelector(state => state.buttons.table)
    
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(resetTable())
    },[])

    return (
        <div className="Table">
            {table.map((row, index) => <Row row={row} rowOrder={index} key={index}/>)}
        </div>
    )
}

export default Table
