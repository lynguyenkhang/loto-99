import React, { useState } from 'react'
import { useSelector } from 'react-redux'



import './Show.css'


const ShowRandomNumberBtn = () => {

    const [ showRandomNumber, setShowRandomNumber ] = useState(false)
    const NumberList = useSelector(state => state.room.firestoreData.NumberList)
    const color = useSelector(state => state.buttons.colors)

    return (
        <div className="ShowRandomNumberBtn">
            
            <div className={`ShowRandomNumberBtn__overlay ${showRandomNumber ? 'ShowRandomNumberBtn__showOverlay' : ''}`}
                onClick={() => setShowRandomNumber(!showRandomNumber)}
            ></div>


            <div className="ShowRandomNumberBtn__Icon"
                onClick={() => setShowRandomNumber(!showRandomNumber)}>
            </div>

            <ul className={`ShowRandomNumberBtn__listBox ${showRandomNumber ? "ShowRandomNumberBtn__showListsBox" : ""}`}>
                {NumberList.map(item => 
                    <span className="ShowRandomNumberBtn__listNumber" key={item}
                        style={{backgroundColor: `${color}`}}>
                            {`${item}`}
                    </span>)}
            </ul>
        </div>
    )

}

export default ShowRandomNumberBtn