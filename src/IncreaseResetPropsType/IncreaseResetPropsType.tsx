import React from "react";

type IncreaseResetPropsType = {
    title: string
    setValue: (value: number) => void
    value: number
}
export const IncreaseResetPropsType = (props: IncreaseResetPropsType) => {
    let increase = () => {
        props.value < 5 ? props.setValue(props.value + 1) : props.setValue(props.value)
    }
    let reset = () => {
        props.setValue(0)
    }
    return (
        props.title === 'inc' ?
            <button disabled={props.value == 5} onClick={increase} className={'button'}>{props.title}</button> :
            <button disabled={props.value == 0} onClick={reset} className={'button'}>{props.title}</button>
    )
}