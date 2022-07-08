import React, {useEffect, useState} from 'react';
import './App.css';
import {IncreaseReset} from "./IncreaseReset/IncreaseReset";


function App() {

    let [value, setValue] = useState<number>(0)

    useEffect(() => {
        let holdValue = localStorage.getItem('setElement')
        if (holdValue) {
            let newHoldValue = JSON.parse(holdValue)
            setValue(newHoldValue)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('setElement', JSON.stringify(value))
    }, [value])

    return (
        <div className="App">
            <div className={"counterWrapper"}>
                <div className={'windowChangingNumber'}>
                    <div className={'changingNumber'}><span className={value === 5 ? 'fiveRed' : ''}>{value}</span></div>
                </div>
                <div className={'buttons'}>
                    <IncreaseReset value={value} setValue={setValue} title={'inc'}/>
                    <IncreaseReset value={value} setValue={setValue} title={'reset'}/>
                </div>
            </div>
        </div>
    );
}


export default App;
