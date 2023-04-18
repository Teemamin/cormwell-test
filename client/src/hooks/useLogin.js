import { useState, useCallback } from "react";
import axiosClient from '../api/axiosDefault';
import {  useNavigate } from 'react-router-dom';
import useFormValidation from "./useFormValidation";
import { useDispatch } from 'react-redux';
import { userActions } from '../store';


const useLogin = (formData) => {
    const [regData, setRegData] = useState(formData);
    const { validateForm, errors, validateInput } = useFormValidation()
    const [apiError, setApiError] = useState('')
    const navigate = useNavigate();
    const dispatch = useDispatch()

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

        if(!isValidForm) {
            return;
        }
        const userData = {
            email: regData.email.value,
            password: regData.password.value,
          }
        try {
            const {data} = await axiosClient.post('/login', userData)
            dispatch(userActions.setCurrentUser(data))
            navigate('/landing')

        } catch (error) {
            setApiError(error.response.data.msg)
        }
    }, [regData,dispatch,navigate,validateForm]) //added dispatch,navigate,validateForm and removed errors as depndncy


    return { 
        formData: regData,
        onChange,
        onSubmit,
        errors,
        validateInput,
        apiError
    }
}

export default useLogin