import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from "react-router-dom";
import { addName } from '../../../features/user';
import userIcon from '../../../images/account.png';
import './index.css';


function InputUserName() {
    const inputEl = useRef(null);
    const name = useSelector(state => state.user.name)
    const dispatch = useDispatch();
    const updateUserName = name => dispatch(addName(name))



    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const updateName = (inputEl) => {
        const typedName = inputEl.current.value
        updateUserName(typedName)
        history.replace(from)
    }



    return (
        <div className="InputUserName">
                <div className="InputUserName__bgImage"></div>
                <div className="InputUserName__overlay"></div>
                <div className="InputUserName__box">
                    <div className="InputUserName__inputBox">
                        <img className="InputUserName__iconUser" src={userIcon} alt="user icon"/>
                        <input ref={inputEl} placeholder={`${name ? "Tên bạn muốn thay đổi" : "Nhập tên của bạn"}`}></input>
                    </div>
                    <button className="InputUserName__button" onClick={() => updateName(inputEl)}>
                       {`${name ? "Thay đổi" : "Nhập tên"}`}
                    </button>
                </div>
        </div>
    )
}

export default InputUserName
