import React, {useEffect, useState} from 'react';
import s from './Counter.module.css';
import {IncreaseReset} from "../IncreaseReset/IncreaseReset";

type CounterPropsType = {
    setValue: (value: number) => void
    value: number
    valueMaxCounter: number
    startValue: number
    counterValue: boolean
    setCounterValue: (counterValue: boolean) => void
}

function Counter(props: CounterPropsType) {

    let [errorTitle, setErrorTitle] = useState('Incorrect value!')

    useEffect(() => {
        let holdValue = localStorage.getItem('setElement')
        if (holdValue) {
            let newHoldValue = JSON.parse(holdValue)
            props.setValue(newHoldValue)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('setElement', JSON.stringify(props.value))
    }, [props.value])

    useEffect(() => {
        let holdValue = localStorage.getItem('setElementCounterValue')
        if (holdValue) {
            let newHoldValue = JSON.parse(holdValue)
            props.setCounterValue(newHoldValue)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('setElementCounterValue', JSON.stringify(props.counterValue))
    }, [props.counterValue])


    return (
        <div>
            <div className={s.counterWrapper}>
                <div className={s.windowChangingNumber}>
                    <div className={s.changingNumber}>
                        {props.counterValue ?
                            <span className={props.value === props.valueMaxCounter ? s.red : ''}>{props.value}</span> :
                            <span className={s.redError}>{errorTitle}</span>}
                    </div>
                </div>
                <div>
                    <IncreaseReset value={props.value} setValue={props.setValue}
                                   valueMaxCounter={props.valueMaxCounter}
                                   startValue={props.startValue}/>
                </div>
            </div>
        </div>
    );
}

export default Counter