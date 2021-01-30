import React, {useState, useEffect} from 'react'
import './index.css'

import trophyIcon from '../../images/trophy.svg'
import alertIcon from '../../images/triangle.svg'
import startIcon from '../../images/flag.svg'

const defaultDecoration  = {
    backgroundColor: '#f8d7da',
    color: '#721c24',
    borderColor: '#f5c6cb',
    zIndex: 2
}


export default function Announce({decoration = defaultDecoration, content, type, timing = 500}) { 

    const [ localContion, setLocalCondition ] = useState(false);
    let icon;


    useEffect(() => {
        if(type !== "alert"){
            setLocalCondition(true)
        } else {
            if(content.trim().length > 0){
                setLocalCondition(true)
                setTimeout(() => {
                    setLocalCondition(false)
                }, timing)
            }
        }
    }, [content])

    switch(type){
        case 'success': icon = trophyIcon; break;
        case 'start': icon = startIcon; break;
        default: icon = alertIcon; break;
    }



    return (
        <div className={`Announce ${localContion ? 'Announce__show' : ''}`} style={decoration}>
            
            <div className="Announce__icon"
                style={{backgroundImage: `url(${icon})`}}>
            </div>


            {content}

        </div>
    )
}
