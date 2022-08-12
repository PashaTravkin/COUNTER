import React from "react";
import {Button} from "../Button/Button";
import s from "./IncreaseReset.module.css";

export type IncreaseReset = {
    setValue: (value: number) => void
    value: number
    valueMaxCounter: number
    startValue: number
    disabledCounterButton:boolean
}
export const IncreaseReset = (props: IncreaseReset) => {
    let increase = () => {
        props.value < props.valueMaxCounter ? props.setValue(props.value + 1) : props.setValue(props.value)
    }
    let reset = () => {
        props.setValue(props.startValue)
    }
    return (
        <div className={s.buttons}>
            <Button title={'inc'} onClick={increase} disabled={props.value == props.valueMaxCounter||props.disabledCounterButton}/>
            <Button title={'rest'} onClick={reset} disabled={props.value == props.startValue||props.disabledCounterButton}/>
        </div>
    )
}