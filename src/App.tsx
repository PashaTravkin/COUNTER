import React, {useState} from 'react';
import './App.css';
import Counter from "./Counter/Counter";
import Setter from "./Setter/Setter";


function App() {

    let [value, setValue] = useState<number>(0)// то, что мы видем в счетчике
    let [valueStartCounter, setValueStartCounter] = useState(0)// это для хранения стартового значения счетчика
    let [valueMaxCounter, setValueMaxCounter] = useState(0)// это для хранения максимального значения для установки счетчика
    let [disabledSetterButton, setDisabledSetterButton] = useState(true)
    let [disabledCounterButton, setDisabledCounterButton] = useState(true)

    let [counterValue, setCounterValue] = useState(true)
    let [errorTitle, setErrorTitle] = useState('Incorrect value!')
    return (
        <div className="App">
            <div className="setter">
                <Setter
                    setValue={setValue}
                    valueStartCounter={valueStartCounter}

                    setValueStartCounter={setValueStartCounter}

                    valueMaxCounter={valueMaxCounter}
                    setValueMaxCounter={setValueMaxCounter}

                    disabledSetterButton={disabledSetterButton}
                    setDisabledSetterButton={setDisabledSetterButton}

                    setCounterValue={setCounterValue}

                    setErrorTitle={setErrorTitle}

                    setDisabledCounterButton={setDisabledCounterButton}/>
            </div >

            <Counter value={value}
                     setValue={setValue}
                     valueMaxCounter={valueMaxCounter}
                     startValue={valueStartCounter}
                     counterValue={counterValue}
                     setCounterValue={setCounterValue}
                     errorTitle={errorTitle}
                     disabledCounterButton={disabledCounterButton}
            />
        </div>
    )
}


export default App;
