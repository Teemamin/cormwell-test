import { renderWithProviders } from "../utils/test-utils";
import { BrowserRouter as Router } from "react-router-dom";
import { Register } from "../pages";

import {fireEvent} from '@testing-library/react';


describe('Register render page',()=>{
    test('renders', ()=>{
        const { getByTestId, getByText } =  renderWithProviders(<Router><Register /></Router>) 
        expect(getByText(/Register/i)).toBeInTheDocument();
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
        expect(getByText(/register/i)).toBeInTheDocument();
      });


})

describe('Form behaviour',()=>{

    // test('submiting a form works correctly', async () => {
    //     const { getByTestId, getByText } =  renderWithProviders(<Router><Login /></Router>) 
        // const form = getByTestId("form"), {target: {text1: {value: 'Text' } } })
        
    //     const form = getByTestId('form')
    //     fireEvent.submit(form)
    //     const e = getByText(/Please enter Email/i)
        // expect(form).toBeInTheDocument();
    //     expect(e).toBeInTheDocument();
    //  })
})

