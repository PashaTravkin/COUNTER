import React from "react";
import {Button} from "../Button/Button";
import s from "./IncreaseReset.module.css";

export type IncreaseReset = {
    setValue: (value: number) => void
    value: number
    valueMaxCounter: number
    startValue: number
    disabledCounterButton:boolean
    setOrCount:boolean
    setSetOrCount:(setOrCount:boolean)=>void
}

export const IncreaseReset = (props: IncreaseReset) => {
    let increase = () => {
        props.value < props.valueMaxCounter ? props.setValue(props.value + 1) : props.setValue(props.value)
    }
    let reset = () => {
        props.setValue(props.startValue)
    }

    let change =()=>{
        props.setSetOrCount(!props.setOrCount)
    }

    return (
        <div className={s.buttons}>
            <Button title={'inc'} onClick={increase} disabled={props.value == props.valueMaxCounter||props.disabledCounterButton}/>
            <Button title={'rest'} onClick={reset} disabled={props.value == props.startValue||props.disabledCounterButton}/>
            <Button title={'set'} onClick={change}/>
        </div>
    )
}