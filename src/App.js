import './App.css';
import { useState , useReducer} from 'react'
import reducer, {initialState} from './cal/reducer'
import Logger from "./cal/Logger";

// TODO LIIIST
function App(){
  const [state, dispatch] = useReducer(Logger(reducer),initialState)
  console.log(state)
  
  
  return (
    <div className="calculator">
      <div className="cal">Caculator</div>
      <div className="container">
        <div className="display">
        {!state.num2 ? state.result : state.num2} 
          <span className="cursor" />
        </div>
        <button className="btn" onClick={() => dispatch({ type: 'ac'})} >AC</button>
        <button className="btn" onClick={() => dispatch({ type: 'c'})}>C</button>
        <button className="btn" onClick={() => dispatch({ type: '2', payload: '*'})}>x</button>
        <button className="btn" onClick={() => dispatch({ type: '2', payload: '/'})}>/</button>
        <button className="btn" onClick={() => dispatch({ type: '1', payload: '7'})}>7</button>
        <button className="btn" onClick={() => dispatch({ type: '1', payload: '8'})}>8</button>
        <button className="btn" onClick={() => dispatch({ type: '1', payload: '9'})}>9</button>
        <button className="btn" onClick={() => dispatch({ type: '2', payload: '+'})}>+</button>
        <button className="btn" onClick={() => dispatch({ type: '1', payload: '4'})}>4</button>
        <button className="btn" onClick={() => dispatch({ type: '1', payload: '5'})}>5</button>
        <button className="btn" onClick={() => dispatch({ type: '1', payload: '6'})}>6</button>
        <button className="btn" onClick={() => dispatch({ type: '2', payload: '-'})}>-</button>
        <button className="btn" onClick={() => dispatch({ type: '1', payload: '1'})}>1</button>
        <button className="btn" onClick={() => dispatch({ type: '1', payload: '2'})}>2</button>
        <button className="btn" onClick={() => dispatch({ type: '1', payload: '3'})}>3</button>
        <button className="btn zero" onClick={() => dispatch({ type: '1', payload: '0'})}>0</button>
        <button className="btn" onClick={() => dispatch({ type: '1', payload: '.'})}>.</button>
        <button className="btn eq"  onClick={() => dispatch({ type: '3'})}>=</button>
      </div>
  </div>
  )
}
export default App;
