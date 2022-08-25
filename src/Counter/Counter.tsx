import React, {useEffect} from 'react';
import s from './Counter.module.css';
import {IncreaseReset} from "../IncreaseReset/IncreaseReset";

type CounterPropsType = {
    setValue: (value: number) => void
    value: number
    valueMaxCounter: number
    startValue: number
    counterValue: boolean
    setCounterValue: (counterValue: boolean) => void
    errorTitle: string
    disabledCounterButton:boolean
    setOrCount:boolean
    setSetOrCount:(setOrCount:boolean)=>void
}

function Counter(props: CounterPropsType) {

    useEffect(() => {
        let holdValue = localStorage.getItem('setElement')
        if (holdValue) {
            let newHoldValue = JSON.parse(holdValue)
            props.setCounterValue(newHoldValue)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('setElement', JSON.stringify(props.startValue))
        }, [props.startValue])

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
                            <span className={props.errorTitle==='Incorrect value!'? s.redError:s.green}>{props.errorTitle}</span>}
                    </div>
                </div>
                <div>
                    <IncreaseReset value={props.value}
                                   setValue={props.setValue}
                                   valueMaxCounter={props.valueMaxCounter}
                                   startValue={props.startValue}
                                   disabledCounterButton={props.disabledCounterButton}
                                   setOrCount={props.setOrCount}
                                   setSetOrCount={props.setSetOrCount}/>
                </div>
            </div>
        </div>
    );
}

export default Counter