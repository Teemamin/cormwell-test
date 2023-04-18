import { useState, useCallback } from "react";


const validatePassword = (password)=>{
    //StackOverFlow
    var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return re.test(password);
}
// create util formValidationFunction 

const validateFormField = () => {
    //returns object of functions to validate each form field
    return {
        username: (value) => ({ isError: !value, message: 'Please enter Username.' }),
        email: value => {
            const isValidEmail = String(value)
            .toLowerCase()
            .match(
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
            return ({ isError: !isValidEmail?.length, message: 'Please enter a valid Email including @ and .'})
        
        },
        password: value => {
            let isNotValid;
            let msg;
            if (!value) {
                msg = "Please enter Password.";
                isNotValid = true
              } 
              else if(!validatePassword(value)){
                msg = "Password must be min 8 letters, with at least a symbol, upper and lower case letters and a number";
                isNotValid = true
              }
            return { isError: isNotValid, message: msg }
        },
        confirmPassword: (confirmPassword,password) => {
            let isNotValid;
            let msg;
            if (!confirmPassword) {
                msg = "Please enter Confirm Password.";
                isNotValid = true
              } else if (password !== confirmPassword) {
                msg = "Password and Confirm Password does not match.";
                isNotValid = true
              }
            return { isError: isNotValid, message: msg }
        }
    }
}



const useFormValidation = () => {
    const [errors, setError] = useState({})


    const doValidationStep = useCallback((key, formData) => {
        // performs the actual validation steps
        const validators = validateFormField();
        const data = formData[key];

        if(!data) {
            return
        }

        const shouldValidate = data.validate;
        const hasValidator = validators[key];

        if(shouldValidate && !!hasValidator) {
            let isValid = true;
            let message = '';
            if(key === 'confirmPassword') {
                const passwordData = formData[data.key];//this will retrive the key with the name password and lets us collect the passowrd data from the form
                const { isError, message: messageError } = validators[key](data.value, passwordData.value)
                isValid = !isError;
                message = messageError;
            }else {
                // const resValidators = validators[key](data.value)
                const { isError, message: messageError } = validators[key](data.value);
                isValid = !isError;
                message = messageError;
            }

            setError(prev => {
                const stateObj = { ...prev, [key]: isValid ? '' : message };

                if(isValid) {
                    delete stateObj[key]
                }

                return stateObj;
            })
        //    console.log(isValid)
        //    console.log('errors in val..',errors.email)

            return isValid;
        }

        return true;
    }, [])
    
    const validateInput = useCallback((event, formData) => {
        let { name: key } = event.target;

        doValidationStep(key, formData)
    }, [doValidationStep])

    const validateForm = useCallback((formData) => {
        const formErrors = Object.keys(formData).map(key => doValidationStep(key, formData))
        return formErrors.every(val => val)
    }, [doValidationStep])

    return {
        errors,
        validateForm,
        validateInput
    }
}

export default useFormValidation