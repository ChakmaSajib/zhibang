import React, { useState} from "react"

const Counter = (props) =>{
    const [counterValue, setCounterValue] = useState(0)
    const [inputValue, setInputValue] = useState(0)


    const addToCounter = ()=>{
        setCounterValue(counterValue + inputValue)
    }

    const subtractFromCounter = ()=>{
        setCounterValue(counterValue - inputValue)
    }
    return {
        <React.Fragment>
        <h1 data-testid="header">Hello World</h1>
        <h2 data-testid="counter" className={`${counterValue >= 100 ? 'green': "" } ${counterValue <=-100 ?"red":''}`}>{counterValue}</h2>
        <button data-testid="subtract-btn" onClick={subtractFromCounter}>-</button>
        <input data-testid="input"  type="number" value={inputValue} onChange={ 
            (e) => setInputValue(parseInt(e.target.value) )
        }/>
        <button data-testid="addBtn" onClick={addToCounter}>+</button>
        </React.Fragment>
        
    }
}


 
export default Counter