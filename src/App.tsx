import React, {useState} from 'react';
import './App.css';
import {IncreaseReset} from "./IncreaseReset/IncreaseReset";


function App() {

    type valueType = number
    let [value, setValue] = useState<valueType>(0)

    return (
        <div className="App">
            <div className={"counterWrapper"}>
                <div className={'windowChangingNumber'}>
                    <div className={'changingNumber'}><span className={value == 5 ? 'fiveRed' : ''}>{value}</span></div>
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
