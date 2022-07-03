import React from "react";

type IncreaseReset = {
    title: string
    setValue: (value: number) => void
    value: number
}
export const IncreaseReset = (props: IncreaseReset) => {
    let increase = () => {
        props.value < 5 ? props.setValue(props.value + 1) : props.setValue(props.value)
    }
    let reset = () => {
        props.setValue(0)
    }
    return (
        <>
            {props.title === 'inc' &&
                <button disabled={props.value == 5} onClick={increase} className={'button'}>{props.title}</button>}
            {props.title === 'reset' &&
                <button disabled={props.value == 0} onClick={reset} className={'button'}>{props.title}</button>}
        </>
    )
}