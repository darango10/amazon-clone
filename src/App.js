import React, {useEffect} from 'react';
import './App.css';
import Header from "./components/Header";
import Home from "./components/Home";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import {auth} from "./firebase";
import {useStateValue} from "./StateProvider";
import {actionTypes} from "./reducer";

function App() {

    const [{user, isLoggedIn}, dispatch] = useStateValue();

    useEffect(() => {
        auth.onAuthStateChanged(authUser => {
            console.log('USER IS >>>>> ', authUser)
            if (authUser) {
                dispatch({
                    type: actionTypes.SET_USER,
                    payload: authUser
                })
            } else {
                dispatch({
                    type: actionTypes.SET_USER,
                    payload: null
                })
            }

        })
    }, []);


    return (
        <Router>
            <div className="app">
                <Switch>
                    <Route exact path={'/login'}>
                        <Login/>
                    </Route>
                    <Route exact path={'/checkout'}>
                        <Header/>
                        <Checkout/>
                    </Route>
                    <Route exact path={'/'}>
                        <Header/>
                        <Home/>
                    </Route>
                </Switch>
            </div>
        </Router>

    );
}

export default App;
