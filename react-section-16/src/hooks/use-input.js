import { useState } from "react"

const useInput = (validateValue) => {

    const [enteredValue, setEnteredValue] = useState('')
    const [isTouched, setIsTouched] = useState(false)


    const valueChangeHandler = event => {
        setEnteredValue(event.target.value)
    }

    const inputBlurHandler = event => {
        setIsTouched(true)
    }
    const valueIsValid  = validateValue(enteredValue)
    const hasError = !valueIsValid && isTouched

    const reset = () => {
        setEnteredValue("")
        setIsTouched(false)
    }
    return {
        value: enteredValue, 
        hasError,
        isValidKey: valueIsValid,
        valueChangeHandler,
        inputBlurHandler,
        reset
    }

}


export default useInput