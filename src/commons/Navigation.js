import React from 'react'
import {Link, useLocation} from 'react-router-dom'
import { useSelector } from 'react-redux' 
import './Navigation.css'

const Navigation = () => {
    const user = useSelector(state => state.user)
    const { currentRoom, name, type } = user
    const {pathname} = useLocation()


    

    return (
        <nav className="Navigation">
            <ul className="Navigation__list">

                <li className={`Navigation__link ${pathname === '/' ? 'Navigation__activeLink' : ''}`}>
                    <Link to="/">Trang chủ</Link>
                </li>

                {pathname !== '/loto' && <li className={`Navigation__link ${pathname === '/inputusername' ? 'Navigation__activeLink' : ''}`}>
                    <Link to="/inputusername">{name.length ? 'Đổi tên' : 'Nhập tên'}</Link>
                </li>}

                {currentRoom.length > 0 && <li className={`Navigation__roomID`}>
                    Phòng: <strong>{currentRoom}</strong>
                </li>}



            </ul>
            <div className="Navigation__userName">
                {name}
                {type && <span className="Navigation__typeUser">  ({type === "host" ? "Chủ phòng" : "Thành viên"})</span>}
            </div>

        </nav>
    )
}

export default Navigation