import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import './index.css'



const MembersBtn = () => {

    const [ showMembersList, setShowMembersList ] = useState(false)
   const Members = useSelector(state => state.room.firestoreData.Members)
    const length =  Members.length 
    return (
        <div className="MembersBtn">
            
            <div className={`MembersBtn__overlay ${showMembersList ? 'MembersBtn__showOverlay' : ''}`}
                onClick={() => setShowMembersList(!showMembersList)}
            ></div>


            <div className="MembersBtn__Icon"
                onClick={() => setShowMembersList(!showMembersList)}>
                    <span>{length}</span>
            </div>

            <ul className={`MembersBtn__listBox ${showMembersList ? "MembersBtn__showListsBox" : ""}`}>
                {Members.map(({name, type}) =>{
                    const typeUser = type === "host" ? 'Chủ phòng' : 'Thành viên'
                    return <li key={name}><strong>{name}</strong>: {typeUser}</li>})}
            </ul>
        </div>
    )

}

export default  MembersBtn