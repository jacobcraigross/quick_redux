import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement, reset, incrementByAmount} from './counterSlice';
import { useState } from 'react';


const Counter = () => {

    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();
    const [incrementAmount, setIncrementAmount] = useState(0);
    const addValue = Number(incrementAmount) || 0;
    const resetAll = () => {
        setIncrementAmount(0);
        dispatch(reset());
    } 

    return (
        <section>
            <p>{count}</p>
            <div>
                <button onClick={() => dispatch(increment())}> DEPOSIT CASH </button>
            </div>
            <br/>
            <div>
                <button onClick={() => dispatch(decrement())}> WITHDRAW CASH </button>
            </div>
            <br/>
            <input 
                type="text"
                value={incrementAmount}
                onChange={(event) => setIncrementAmount(event.target.value)}
            />
            <div>
                <br/>
                <button onClick={() => dispatch(incrementByAmount(addValue))}>DEPOSIT CASH BY AMOUNT</button>
                <br/>
                <br/>
                <button onClick={resetAll}>RESET YOUR BANKING</button>
            </div>
        </section>
    )
};

export default Counter;