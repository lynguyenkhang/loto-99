import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import { setAlert } from '../../../features/buttons';
import { addRoom } from '../../../features/user';
import houseIcon from '../../../images/house.svg';
import AlertAnnounce from '../../announces/Alert/';
import './index.css';
 

const Home = () => {

    const inputEL = useRef(null);
    let history = useHistory();
    const dispatch = useDispatch();

    const room = useSelector(state => state.user.currentRoom)

    useEffect(() => {
        if(room.length > 0) history.push('/loto')
    }, [room])

    const enterRoom = inputEL => {
        const inputedID = inputEL.current.value || 'invalidRoomID';
        dispatch(addRoom(inputedID))
        setTimeout(() => dispatch(setAlert('')), 1000);
    }


    const createRoom = () => {
        dispatch(addRoom(''))
        setTimeout(() => dispatch(setAlert('')), 1000);
    }



    return (
        <div className="Home">
                <AlertAnnounce />

                <div className="Home__bgImage"></div>
                <div className="Home__overlay"></div>
                <div className="Home__box Home__box1">
                    <div className="Home__inputBox">
                        <img className="Home__iconUser" src={houseIcon} alt="home icon"/>
                        <input ref={inputEL} placeholder="Nhập mã phòng"></input>
                    </div>
                    
                    <button className="Home__joinButton" 
                        onClick={() => enterRoom(inputEL)}>
                            Vào phòng
                    </button>
                    <div className="Home__bar"></div>
                    <button className="Home__createButton"
                        onClick={() => createRoom()}
                    >Tạo phòng</button>
                </div>
        
        
        </div>
    )
}


export default Home
