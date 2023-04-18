import { renderWithProviders } from "../utils/test-utils";
import { BrowserRouter as Router } from "react-router-dom";
import { Landing } from "../pages";
import { Login } from "../pages";
import {fireEvent} from '@testing-library/react';


describe('Login render page',()=>{
    test('renders', ()=>{
        const { getByTestId } =  renderWithProviders(<Router><Login /></Router>) 
        expect(getByTestId('form')).toBeInTheDocument()
    })
    test('render 3 input components', () => {
        const {getByLabelText } =  renderWithProviders(<Router><Login /></Router>);
        expect(getByLabelText(/email/i)).toBeInTheDocument();
        expect(getByLabelText('Password')).toBeInTheDocument();
        expect(getByLabelText(/Confirm Password/i)).toBeInTheDocument();
      });

})

describe('Form behaviour',()=>{

    test('submiting an empty login form validation', async () => {
        const { getByTestId, getByText } =  renderWithProviders(<Router><Login /></Router>) 
        
        const form = getByTestId('form')
        fireEvent.submit(form)
        const emailError = getByText(/Please enter a valid Email including @ and ./i)
        const passwordError = getByText(/Please enter Password./i)
        const confirmPasswordError = getByText(/Please enter Confirm Password./i)
        expect(form).toBeInTheDocument();
        expect(emailError).toBeInTheDocument();
        expect(passwordError).toBeInTheDocument();
        expect(confirmPasswordError).toBeInTheDocument();
     })
})

