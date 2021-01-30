import React, {useState, useEffect } from 'react'
// import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'
import { activeNumber } from '../../../../features/buttons'

import './index.css'

const Number = ({number, active, colOrder, rowOrder}) => {

    const [ blank, setBlank ] = useState();
    const dispatch = useDispatch()
    const color = useSelector(state => state.buttons.colors)


    useEffect(() => {
        setBlank(number === " ")
    },[number])

    // const {activeNumber } = useContext(LotoContext)
    const handleActiveNumber = () => {
        if(!blank){
            const object = { row: rowOrder, col: colOrder}
            const action = activeNumber(object)
            dispatch(action)
        }
    }


    let radiusClass = ''
    if(colOrder === 0 && rowOrder === 0) radiusClass = 'Number__topLeftRadius'
    if(colOrder === 8 && rowOrder === 0) radiusClass = 'Number__topRightRadius'
    if(colOrder === 0 && rowOrder === 8) radiusClass = 'Number__botLeftRadius'
    if(colOrder === 8 && rowOrder === 8) radiusClass = 'Number__botRightRadius'


    return (
        <button
            className={`Number ${radiusClass} ${(active && !blank) ? 'activeNumber' : ''}`}
            onClick={handleActiveNumber}
            style={{
                borderLeft: `${colOrder === 0 ? "1px solid #555" : 'none'}`,
                backgroundColor: `${!blank ? "#FFF" : color}`
            }}
        >
            {number}
        </button>
    )
}

// Number.propTypes = {

// }

export default Number

