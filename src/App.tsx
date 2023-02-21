import React, {useEffect, useState} from 'react'
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./bll/store";
import {counterAC} from "./bll/counter-reducer";

function App() {

    const value = useSelector<AppStateType, number>(state => state.counter.value)

    const dispatch = useDispatch()

    const inc = () => {
        dispatch(counterAC())
    }

    return (
        <div className="App">
            <h1>{value}</h1>
            <button onClick={inc}>+</button>
        </div>
    );
}

export default App;
