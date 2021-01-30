import React from 'react'
import { useSelector } from 'react-redux'

import Announce from '../index'

export default function WinnersAnnounce() {
    const Winners = useSelector(state => state.room.firestoreData.Winners)

    let WinnersString = Winners.map((name, index) => !index ? name : ` ${name}`)

    const content = `Chúc mừng ${WinnersString.join()} đã chiến thắng`;
    const decoration = {
        color: '#856404',
        backgroundColor: '#fff3cd',
        borderColor: '#ffeeba',
        zIndex: 2
    }

    return (
        <div>
            {Winners.length > 0 && <div className="WinnersAnnounce">
                <Announce 
                    type='success'
                    content={content}
                    decoration={decoration}
                />
            </div>}
        </div>
    )
}
