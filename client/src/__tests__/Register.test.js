import { renderWithProviders } from "../utils/test-utils";
import { BrowserRouter as Router } from "react-router-dom";
import { Register } from "../pages";

import {fireEvent} from '@testing-library/react';


describe('Register render page',()=>{
    test('renders', ()=>{
        const { getByTestId, getByText } =  renderWithProviders(<Router><Register /></Router>) 
        // expect(getByText(/Register/i)).toBeInTheDocument();
        expect(getByTestId('form')).toBeInTheDocument()
    })
    test('render 4 input components', () => {
        const {getByLabelText } =  renderWithProviders(<Router><Register /></Router>);
        expect(getByLabelText(/email/i)).toBeInTheDocument();
        expect(getByLabelText(/username/i)).toBeInTheDocument();
        expect(getByLabelText('Password')).toBeInTheDocument();
        expect(getByLabelText(/Confirm Password/i)).toBeInTheDocument();
      });
    
      test('renders a register button', () => {
        const {getByText} = renderWithProviders(<Router><Register /></Router>);
        // expect(getByText(/register/i)).toBeInTheDocument();
      });


})


describe('Form behaviour',()=>{

    test('submiting an empty registration form validation', async () => {
        const { getByTestId, getByText } =  renderWithProviders(<Router><Register /></Router>) 
        
        const form = getByTestId('form')
        fireEvent.submit(form)
        const emailError = getByText(/Please enter a valid Email including @ and ./i)
        const passwordError = getByText(/Please enter Password./i)
        const usernameError = getByText(/Please enter Username./i)
        const confirmPasswordError = getByText(/Please enter Confirm Password./i)
        expect(form).toBeInTheDocument();
        expect(emailError).toBeInTheDocument();
        expect(usernameError).toBeInTheDocument();
        expect(passwordError).toBeInTheDocument();
        expect(confirmPasswordError).toBeInTheDocument();
     })
})

