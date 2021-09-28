import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment } from '../actions';
import { decrement, signin } from '../actions';

function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div>
        <h4> Counter: {counter}</h4>
        <button onClick={() => dispatch(increment(5))}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        {!isLogged && <button onClick={() => dispatch(signin())}>Click me!</button>}
        {isLogged && <span>Button clicked</span>}
    </div>
  );
}

export default App