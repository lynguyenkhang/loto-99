import React from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from './commons/Navigation'
import InputUserName from './components/pages/InputUserName/'

import HomeRoute from './components/routes/Home'
import LotoRoute from './components/routes/Loto'


const App = () => {

    return (
        <Router>
            <div className="App">
                <Navigation/>

                <Switch>
                    <HomeRoute exact path="/" />

                    <Route exact path="/inputusername">
                        <InputUserName />
                    </Route>

                    <LotoRoute exact path="/loto" />

                </Switch>
            </div>
        </Router>
    );
  }

  
export default App;
