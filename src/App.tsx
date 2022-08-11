import React, {useState} from 'react';
import './App.css';
import Counter from "./Counter/Counter";
import Setter from "./Setter/Setter";


function App() {

    let [value, setValue] = useState<number>(0)
    let [valueMaxCounter, setValueMaxCounter] = useState(4)
    let [startValue, setStartValue] = useState(0)
    let [valueMax, setValueMax] = useState(0)

    return (
        <div className="App">
            <Setter valueMax={valueMax} startValue={startValue} setValueMax={setValueMax}
                    setValueMaxCounter={setValueMaxCounter}
                    setStartValue={setStartValue}
                    setValue={setValue}
            />
            <Counter value={value} setValue={setValue} valueMaxCounter={valueMaxCounter} startValue={startValue}/>
        </div>
    )
}


export default App;
