import React, {useState} from 'react';
import './App.css';
import Counter from "./Counter/Counter";
import Setter from "./Setter/Setter";


function App() {

    let [value, setValue] = useState<number>(0)// то, что мы видем в счетчике
    let [valueStartCounter, setValueStartCounter] = useState(0)// это для хранения стартового значения счетчика
    let [valueMaxCounter, setValueMaxCounter] = useState(4)// это для хранения максимального значения для установки счетчика
    let [valueMax, setValueMax] = useState(0)// это для хранения мах значения, устанавливаемого в setter-e

    return (
        <div className="App">
            <Setter valueMax={valueMax} valueStartCounter={valueStartCounter} setValueMax={setValueMax}
                    setValueMaxCounter={setValueMaxCounter}
                    setValueStartCounter={setValueStartCounter}
                    setValue={setValue}
            />
            <Counter value={value} setValue={setValue} valueMaxCounter={valueMaxCounter} startValue={valueStartCounter}/>
        </div>
    )
}


export default App;
