import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Loto from '../../pages/Loto'



function LotoRoute({...rest}) {
    const name = useSelector(state => state.user.name)
    const currentRoom = useSelector(state => state.user.currentRoom)
    const pathName = name.length ? '/' : '/inputusername'
    
    return (
        <Route {...rest}
        render={props => {
            if(currentRoom.length) return <Loto />
            else return <Redirect
                to={{
                    pathname: pathName,
                    state: {from: props.location}
                }}
            />
        }}
        />
    )
}

export default LotoRoute
