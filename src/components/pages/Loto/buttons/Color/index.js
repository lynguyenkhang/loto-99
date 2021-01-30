import React, { useState} from 'react'
import { useDispatch } from 'react-redux'
import { changeColors } from '../../../../../features/buttons'

import './index.css'

const ChangeColorBtn = () => {
    const colors = ["#847996","#F77F00","#DF4748","#44bd32", "#00a8ff", "#888C6C", "#379392", "#A97C73", "#FCBF49", "#FF8CC6", "#A28497", "#D1AC00", "#9984D4", "#DB7F67", "#79B473"]
    
    const [ showColorBox, setShowColorBox ] = useState(false)
    const dispatch = useDispatch()

    return (
        <div className="ChangeColorBtn">

            <div className="ChangeColorBtn__button"
                onClick={() => setShowColorBox(!showColorBox)}>
            </div>

            <div className={`ChangeColorBtn__overlay ${showColorBox ? 'ChangeColorBtn__showOverlay' : ''}`}
                onClick={() => setShowColorBox(!showColorBox)}
            >
            </div>
            
            <ul className={`ChangeColorBtn__listsBox ${showColorBox ? 'ChangeColorBtn__showListsBox' : ''}`}>
                {colors.map(hex => 
                    <button
                        style={{backgroundColor: `${hex}`}}
                        onClick={() => dispatch(changeColors(hex))}
                        key={hex}
                    ></button>
                )}
            </ul>
        </div>
    )
}


export default ChangeColorBtn

