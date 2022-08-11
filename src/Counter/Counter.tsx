import React, {useEffect, useState} from 'react';
import s from './Counter.module.css';
import {IncreaseReset} from "../IncreaseReset/IncreaseReset";

type CounterPropsType = {
    setValue: (value: number) => void
    value: number
    valueMaxCounter: number
    startValue:number
}

function Counter(props:CounterPropsType) {

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

    return (
        <div>
            <div className={s.counterWrapper}>
                <div className={s.windowChangingNumber}>
                    <div className={s.changingNumber}><span className={props.value === props.valueMaxCounter ? s.fiveRed : ''}>{props.value}</span>
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