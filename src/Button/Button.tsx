import React from "react";
import s from './Button.module.css'

type ButtonPropsType = {
    title: string
    onClick?: () => void
    disabled?: boolean

}
export const Button = (props: ButtonPropsType) => {

    return (
        <div>
            <button disabled={props.disabled} onClick={props.onClick} className={s.button}>{props.title}</button>
        </div>
    )
}