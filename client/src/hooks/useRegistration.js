import { useState, useCallback } from "react";
import axiosClient from '../api/axiosDefault';
import {  useNavigate } from 'react-router-dom';
import useFormValidation from "./useFormValidation";


const useRegistration = (formData) => {
    const [regData, setRegData] = useState(formData);
    const { validateForm, errors, validateInput } = useFormValidation()
    const [apiError, setApiError] = useState('')
    const navigate = useNavigate();

    const onChange = useCallback(event => {
        const { name, value } = event.target;
        const data = regData[name];
        if(!data) {
            return
        }

        const changes = {...regData, [name]: { ...data, value} }

        setRegData(prevData => {
            const stateObj = { ...prevData, [name]: { ...data, value} };

            return stateObj
        })
        validateInput(event, changes)
    }, [regData,validateInput])

    const onSubmit = useCallback(async (event) => {
        event.preventDefault();
        
        const isValidForm = validateForm(regData)

        console.log('isValidForm --->', isValidForm)

        if(!isValidForm) {
            return;
        }

        const userData = {
            username: regData.username.value,
            email: regData.email.value,
            password: regData.password.value,
          }
        try {
            await axiosClient.post('/register', userData)
            navigate('/login')

        } catch (error) {
            setApiError(error.response.data.msg)
        }
    }, [regData,validateForm,navigate])


    return { 
        formData: regData,
        onChange,
        onSubmit,
        errors,
        validateInput,
        apiError
    }
}

export default useRegistration