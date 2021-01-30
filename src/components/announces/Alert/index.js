import React from 'react'
import { useSelector } from 'react-redux'

import Announce from '../index'

export default function AlertAnnounce() {
    const alert = useSelector(state => state.buttons.alert)

    const { content, thisVaribleToTrigger } = alert
    const decoration = {
        backgroundColor: '#f8d7da',
        color: '#721c24',
        borderColor: '#f5c6cb',
        zIndex: 2
    }

    return (
        <div>
            <div className="AlertAnnounce">
                <Announce 
                    type='alert'
                    content={thisVaribleToTrigger ? `${content} ` : `${content}`}
                    decoration={decoration}
                />
            </div>
        </div>
    )
}
