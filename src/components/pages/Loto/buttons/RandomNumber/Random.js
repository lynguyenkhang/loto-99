import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearTable } from '../../../../../features/buttons'
import { randomNumber } from '../../../../../features/room'
import './Random.css'


const RandomNumberBtn = () => {

    const type = useSelector(state => state.user.type)
    const NumberList = useSelector(state => state.room.firestoreData.NumberList)
    const color = useSelector(state => state.buttons.colors)
    const Winners = useSelector(state => state.room.firestoreData.Winners)
    const CurrentNumber = useSelector(state => state.room.firestoreData.CurrentNumber)

    const dispatch = useDispatch();
    const getRandomNumber = () => dispatch(randomNumber())


    // localRandomNumber have to display after 0.3s
    // 0.3s is a half time of the rotation
    const [ localRandomNumber, setLocalRandomNumber ] =  useState();

    const conditionRandomBtn = type === "host" && Winners.length === 0
    const initialText = type === "host" ? "Lắc" : ""

    const rotate180deg = () => {
        const randomButton = document.getElementsByClassName("RandomNumber__randomButton")[0]
        const randomButton2 = document.getElementsByClassName("RandomNumber__randomButton")[1]
        randomButton.classList.toggle("RandomNumber__rotateRandomButton")
        randomButton2.classList.toggle("RandomNumber__rotateRandomButton")
    }


    useEffect(() => {
        rotate180deg();
        setTimeout(() => {
            if(CurrentNumber !== 0) setLocalRandomNumber(CurrentNumber)
        },300)

        if(CurrentNumber === 0) dispatch(clearTable())
    },[CurrentNumber])

    return (
        <div className="RandomNumber">
            <div className="RandomNumber__buttonsBox">
                <button
                    className="RandomNumber__randomButton"
                    onClick={() => {
                        if(conditionRandomBtn) getRandomNumber()
                    }}
                    style={{backgroundColor: `${color}`}}>
                    {NumberList.length ? localRandomNumber : initialText}
                </button>
                
                <button
                    className="RandomNumber__randomButton RandomNumber__rotateRandomButton"
                    onClick={() => {
                        if(conditionRandomBtn) getRandomNumber()
                    }}
                    style={{backgroundColor: `${color}`}}>
                    {NumberList.length ? localRandomNumber : initialText}
                </button>         
            </div>
        </div>
    )
}

export default RandomNumberBtn;