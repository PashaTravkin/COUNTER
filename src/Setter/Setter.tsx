import s from './Setter.module.css';
import {ChangeEvent, useState} from "react";
import {Button} from "../Button/Button";

type SetterPropsType = {
    valueMax: number
    startValue: number
    setValueMax: (valueMax: number) => void
    setValueMaxCounter: (setValueMaxCounter: number) => void
    setStartValue: (startValue: number) => void
    setValue: (value: number) => void
}

function Setter(props: SetterPropsType) {

    let [valueSetterMax, setValueSetterMax] = useState(props.valueMax)
    let [valueStart, setValueStart] = useState(props.startValue)

    const onChangeHandlerMax = (event: ChangeEvent<HTMLInputElement>) => {
        const number = event.currentTarget.value
        number && props.setValueMax(Number(number))
        setValueSetterMax(Number(number))
    }

    const onChangeHandlerStart = (event: ChangeEvent<HTMLInputElement>) => {
        const number = event.currentTarget.value
        number && props.setStartValue(Number(number))
        setValueStart(Number(number))
    }

    let onclickHandler = () => {
        props.setValueMaxCounter(valueSetterMax)
        props.setValue(valueStart)
    }

    return (
        <div>
            <div className={s.counterWrapper}>
                <div className={s.windowChangingNumber}>
                    <div className={s.changingNumber}>
                        <span>max value: </span> <input type={'number'} onChange={onChangeHandlerMax}
                                                        value={props.valueMax}/>
                        <span>start value: </span> <input type={'number'} onChange={onChangeHandlerStart}
                                                          value={props.startValue}/>
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