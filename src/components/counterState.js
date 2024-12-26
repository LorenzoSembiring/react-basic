import React from "react";
import { useState } from "react";
import "../App.css";
const CounterState = () => {
    const [counter, setCounter] = useState(0);
    const decrement = () => {
        setCounter(counter - 1);
    };
    const increment = () => {
        setCounter(counter + 1);
    };
    let info;
    if (counter % 2 == 0) {
        info = "genap";
    } else {
        info = "ganjil";
    }
    return (
        <div>
            <div>
                <button onClick={decrement}>-</button>
            </div>
            <div>{counter}</div>
            <div>
                <button onClick={increment}>+</button>
            </div>
            <div className={`${counter % 2 ? 'red' : 'blue'}`}>{counter % 2 == 0 ? "genap" : "ganjil"}</div>
        </div>
    );
};

export default CounterState;
