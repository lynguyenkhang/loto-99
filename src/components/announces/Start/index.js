import React from 'react'
import { useSelector } from 'react-redux'

import Announce from '../index'

export default function StartAnnounce() {
    const NumberList = useSelector(state => state.room.firestoreData.NumberList)

    const content = "Bắt đầu"
    const decoration = {
        color: '#0c5460',
        backgroundColor: '#d1ecf1',
        borderColor: '#bee5eb',
        zIndex: 2
    }

    return (
        <div>
            {NumberList.length === 1 && <div className="StartAnnounce">
                <Announce 
                    type='start'
                    content={content}
                    decoration={decoration}
                />
            </div>}
        </div>
    )
}
