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
        const { name, value } = event.target; //email  value = tete.adigu@agmail.com
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
    }, [regData])

    const onSubmit = useCallback(async (event) => {
        event.preventDefault();
        
        validateForm(regData)

        const isValidForm  = () => {
            return Object.keys(errors).length === 0
        }

        if(!isValidForm()) {
            return;
        }
        console.log(!isValidForm(),'form not valid logic func')
        //this code do not reach here even if inputs are all valid
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
    }, [regData, errors])


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