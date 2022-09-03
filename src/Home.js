import React from 'react'
import { useDispatch, useSelector } from 'react-redux';


const Home = () => {

    const dispatch = useDispatch();
    const { c } = useSelector(state => state.custom)

    const addBtn = () => {
        dispatch({
            type: "increment",
        })
    };

    const addBtn20 = () => {
        dispatch({
            type: "incrementByValue",
            payload: 20,
        })
    };

    const subBtn = () => {
        dispatch({
            type: "decrement",
        })
    };

    return (
        <div>
            <h2>{c}</h2>

            <button onClick={addBtn}>Increment</button>
            <button onClick={addBtn20}>Increment by 20</button>
            <button onClick={subBtn}>Decrement</button>
        </div>
    )
}

export default Home
