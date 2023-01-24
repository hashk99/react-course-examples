import { useEffect  } from "react";
import useInput from "../hooks/use-input";

const SimpleInput = (props) => {

  const {
    hasError:nameInputHasError,
    isValidKey: enteredNameIsValid,
    value: enteredName,
    valueChangeHandler: nameInputChangeHandler,
    inputBlurHandler: nameInputBlurHandler,
    reset: resetNameInput} = useInput(value => value.trim() !== '')

    const {
      hasError:emailInputHasError,
      isValidKey: enteredEmailIsValid,
      value: enteredEmail,
      valueChangeHandler: emailInputChangeHandler,
      inputBlurHandler: emailInputBlurHandler,
      reset: resetEmailInput} = useInput(value => value.includes("@"))


  let isFormValid = false
  if(enteredNameIsValid && enteredEmailIsValid){
    isFormValid = true
  }

  useEffect(() => {
    if(enteredNameIsValid && enteredEmailIsValid){
      console.log("name input is valid!")
    }
  
    return () => {
    }
  }, [enteredNameIsValid, enteredEmailIsValid])
  
  const formSubmissionHandler=  event => {
    event.preventDefault()

    resetNameInput(true)
    resetEmailInput(true)

    if(!nameInputHasError || emailInputHasError){
      return
    }

    console.log(enteredName, enteredEmail)

    resetNameInput("")
    resetEmailInput("")
  }

  const nameInputClasses = nameInputHasError ? `form-control invalid` : 'form-control'
  const emailInputClasses = emailInputHasError ? `form-control invalid` : 'form-control'

  return (
    <form onSubmit={formSubmissionHandler}> 
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input 
        type='text' 
        id='name' 
        onChange={nameInputChangeHandler} 
        onBlur={nameInputBlurHandler} 
        value={enteredName} />
        {nameInputHasError && <p className="error-text">Name must not be empty</p>}
        <label htmlFor='email'>Your Email</label>
      </div>

      <div className={emailInputClasses}>
        <input 
        type='text' 
        id='email' 
        onChange={emailInputChangeHandler} 
        onBlur={emailInputBlurHandler} 
        value={enteredEmail} />
        {nameInputHasError && <p className="error-text">Email must be valid</p>}
      </div>
      <div className="form-actions">
        <button disabled={!isFormValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
