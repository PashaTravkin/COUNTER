import React, {useState} from 'react';
import './App.css';
import Counter from "./Counter/Counter";
import Setter from "./Setter/Setter";


function App() {

    let [value, setValue] = useState<number>(0)// то, что мы видем в счетчике
    let [valueStartCounter, setValueStartCounter] = useState(0)// это для хранения стартового значения счетчика
    let [valueMaxCounter, setValueMaxCounter] = useState(0)// это для хранения максимального значения для установки счетчика
    let [disabledSetterButton, setDisabledSetterButton] = useState(true)
    let [counterValue, setCounterValue] = useState(true)
    return (
        <div className="App">
            <Setter
                setValue={setValue}
                valueStartCounter={valueStartCounter}

                setValueStartCounter={setValueStartCounter}

                valueMaxCounter={valueMaxCounter}
                setValueMaxCounter={setValueMaxCounter}

                disabledSetterButton={disabledSetterButton}
                setDisabledSetterButton={setDisabledSetterButton}

                setCounterValue={setCounterValue}/>

            <Counter value={value}
                     setValue={setValue}
                     valueMaxCounter={valueMaxCounter}
                     startValue={valueStartCounter}
                     counterValue={counterValue}
                     setCounterValue={setCounterValue}/>
        </div>
    )
}


export default App;
