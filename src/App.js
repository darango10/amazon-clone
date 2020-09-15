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
import Payment from "./components/Payment";
import {loadStripe} from "@stripe/stripe-js/pure";
import {Elements} from "@stripe/react-stripe-js";
import Orders from "./components/Orders";

const promise = loadStripe('pk_test_51HRUVMLbeAh5xAGDrspgor3yo383oVfsjmuEz9zu7JNogtGKywIFrpf8wBMzZpJg7RKfo3qoR3aOgpq0zG32MOTQ00kOO0sec5');

function App() {

    const [{}, dispatch] = useStateValue();

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
                    <Route exact path={'/payment'}>
                        <Header/>
                        <Elements stripe={promise}>
                            <Payment/>
                        </Elements>

                    </Route>

                    <Route exact path={'/orders'}>
                        <Header/>
                        <Orders/>
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
