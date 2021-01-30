import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import Home from '../../pages/Home'
import { useSelector } from 'react-redux'



function HomeRoute({ ...rest}){
    const name = useSelector(state => state.user.name)
    return (
        <Route {...rest} 
            render={ props => {
                if(name.length) return <Home />
                else return <Redirect to={{
                        pathname: "/inputusername",
                        state: { from: props.location}
                }}/>
            }}
        /> 
    )
}

export default HomeRoute
