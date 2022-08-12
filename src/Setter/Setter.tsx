import s from './Setter.module.css';
import {ChangeEvent, useEffect} from "react";
import {Button} from "../Button/Button";

type SetterPropsType = {

    setValueMaxCounter: (setValueMaxCounter: number) => void
    valueStartCounter: number
    valueMaxCounter:number
    setValueStartCounter: (startValue: number) => void
    setValue: (value: number) => void
    disabledSetterButton:boolean
    setDisabledSetterButton:(disabledSetterButton:boolean)=>void
    setCounterValue:(counterValue:boolean)=>void
    setErrorTitle:(errorTitle:string)=>void
    setDisabledCounterButton:(value:boolean)=>void
}

function Setter(props: SetterPropsType) {

    // let [start, setStart]=useState(props.valueStartCounter)
    // let [max, setMax]=useState(props.valueMaxCounter)

    useEffect(() => {
        let holdValue = localStorage.getItem('setElementMax')
        if (holdValue) {
            let newHoldValue = JSON.parse(holdValue)
            props.setValueMaxCounter(newHoldValue)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('setElementMax', JSON.stringify(props.valueMaxCounter))
    }, [props.valueMaxCounter])

    useEffect(() => {
        let holdValue = localStorage.getItem('setElementStart')
        if (holdValue) {
            let newHoldValue = JSON.parse(holdValue)
            props.setValueStartCounter(newHoldValue)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('setElementStart', JSON.stringify(props.valueStartCounter))
    }, [props.valueStartCounter])

    useEffect(() => {
        let holdValue = localStorage.getItem('setElementDisableButton')
        if (holdValue) {
            let newHoldValue = JSON.parse(holdValue)
            props.setDisabledSetterButton(newHoldValue)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('setElementDisableButton', JSON.stringify(props.disabledSetterButton))
    }, [props.disabledSetterButton])



let checkingValues = ()=>{
    if(props.valueMaxCounter<=props.valueStartCounter || props.valueMaxCounter<=0 ||props.valueStartCounter<=0){
        props.setCounterValue(false)
        props.setErrorTitle('Incorrect value!')
        props.setDisabledSetterButton(true)
    }
    else {
        // props.setCounterValue(true)
        props.setErrorTitle('Enter your value!')
        props.setDisabledSetterButton(false)}
}

    const onChangeHandlerMax = (event: ChangeEvent<HTMLInputElement>) => {
        const number = event.currentTarget.value
        number && props.setValueMaxCounter(Number(number))
        props.setDisabledSetterButton(false)
        props.setCounterValue(false)
        props.setDisabledCounterButton(true)
        checkingValues()
    }

    const onChangeHandlerStart = (event: ChangeEvent<HTMLInputElement>) => {
        const number = event.currentTarget.value
        number && props.setValueStartCounter(Number(number))
        props.setDisabledSetterButton(false)
        props.setCounterValue(false)
        props.setDisabledCounterButton(true)
        checkingValues()
    }

    let onclickHandler = () => {
        props.setValueMaxCounter(props.valueMaxCounter)
        props.setValue(props.valueStartCounter)
        props.setValueStartCounter(props.valueStartCounter)
        props.setDisabledSetterButton(true)
        props.setCounterValue(true)
        props.setDisabledCounterButton(false)
    }

    return (
        <div>
            <div className={s.counterWrapper}>
                <div className={s.windowChangingNumber}>
                    <div className={s.changingNumber}>
                        <span>max value: </span> <input type={'number'} onChange={onChangeHandlerMax}
                                                        value={props.valueMaxCounter}/>
                        <span>start value: </span> <input type={'number'} onChange={onChangeHandlerStart}
                                                          value={props.valueStartCounter}/>
                    </div>
                </div>
                <div className={s.buttons}>
                    <Button disabled={props.disabledSetterButton} onClick={onclickHandler} title={'set'}/>
                </div>
            </div>
        </div>
    );
}

export default Setter