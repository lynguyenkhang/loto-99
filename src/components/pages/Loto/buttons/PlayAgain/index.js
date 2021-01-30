import React from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { playAgain } from '../../../../../features/room'

import './index.css'

const PlayAgainBtn = () => {
    const Winners = useSelector(state => state.room.firestoreData.Winners)
    const type = useSelector(state => state.user.type)
    const dispatch = useDispatch()
    
    const localPlayAgain = () => dispatch(playAgain())

    // playAgainShow only Winners is not empty
    const condition = (Winners.length > 0 && type === "host")

    return (
        <div>
            <div
                onClick={() => {if(condition) localPlayAgain()}}
                className={`Loto__playAgainBtn ${condition ? 'Loto__showPlayAgainBtn' : ''}`}>
            </div>
        </div>
    )
}


export default PlayAgainBtn