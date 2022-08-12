import s from './Setter.module.css';
import {ChangeEvent, useEffect, useState} from "react";
import {Button} from "../Button/Button";

type SetterPropsType = {
    valueMax: number
    valueStartCounter: number
    setValueMax: (valueMax: number) => void
    setValueMaxCounter: (setValueMaxCounter: number) => void
    setValueStartCounter: (startValue: number) => void
    setValue: (value: number) => void
}

function Setter(props: SetterPropsType) {

    let [valueSetterMax, setValueSetterMax] = useState(props.valueMax)
    let [valueStart, setValueStart] = useState(props.valueStartCounter)

    useEffect(() => {
        let holdValue = localStorage.getItem('setElementMax')
        if (holdValue) {
            let newHoldValue = JSON.parse(holdValue)
            props.setValueMax(newHoldValue)
            props.setValueMaxCounter(newHoldValue)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('setElementMax', JSON.stringify(props.valueMax))
    }, [props.valueMax])

       const onChangeHandlerMax = (event: ChangeEvent<HTMLInputElement>) => {
        const number = event.currentTarget.value
        number && props.setValueMax(Number(number))
        setValueSetterMax(Number(number))
    }

    const onChangeHandlerStart = (event: ChangeEvent<HTMLInputElement>) => {
        const number = event.currentTarget.value
        number && props.setValueStartCounter(Number(number))
        setValueStart(Number(number))
    }

    let onclickHandler = () => {
        props.setValueMaxCounter(props.valueMax)
        props.setValue(valueStart)
        props.setValueStartCounter(props.valueStartCounter)
    }

    return (
        <div>
            <div className={s.counterWrapper}>
                <div className={s.windowChangingNumber}>
                    <div className={s.changingNumber}>
                        <span>max value: </span> <input type={'number'} onChange={onChangeHandlerMax}
                                                        value={props.valueMax}/>
                        <span>start value: </span> <input type={'number'} onChange={onChangeHandlerStart}
                                                          value={props.valueStartCounter}/>
                    </div>
                </div>
                <div className={s.buttons}>
                    <Button onClick={onclickHandler} title={'set'}/>
                </div>
            </div>
        </div>
    );
}

export default Setter