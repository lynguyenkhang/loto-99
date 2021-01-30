import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setAlert } from '../../../features/buttons'
import { fetchRoom } from '../../../features/room'
import { clearRoom, updateTypeUserInFirestore } from '../../../features/user'

import './index.css'

import Table from './Table/'

import ChangeColorBtn from './buttons/Color/'
import MembersBtn from './buttons/Members/'
import RandomNumberBtn from './buttons/RandomNumber/Random'
import ShowRandomNumberBtn from './buttons/RandomNumber/Show'
import ResetTableBtn from './buttons/ResetTable/'
import PlayAgainBtn from './buttons/PlayAgain/'


import AlertAnnounce from '../../announces/Alert/'
import StartAnnounce from '../../announces/Start/'
import WinnersAnnounce from '../../announces/Winners/'




const Loto = () => {
    const currentRoom = useSelector(state => state.user.currentRoom)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchRoom(currentRoom))
        dispatch(updateTypeUserInFirestore())
        
        return () => {
            dispatch(clearRoom())
            dispatch(setAlert(''))
        }
    }, [currentRoom])


    return (
        <div className="Loto">
            <StartAnnounce />
            <AlertAnnounce />
            <WinnersAnnounce />
            <Table />

            <div className="Loto__nav">
                <RandomNumberBtn />

                <div className="Loto__functionsBox">
                    <div className="Loto__resetAndAgainBox">
                        <PlayAgainBtn />
                        <ResetTableBtn />
                    </div>

                    <ShowRandomNumberBtn />
                    <ChangeColorBtn />
                    <MembersBtn />

                </div>
            </div>
            
        </div>
    )
}

export default Loto
