import { renderWithProviders } from "../utils/test-utils";
import { BrowserRouter as Router } from "react-router-dom";
import { Landing } from "../pages";
import { Login } from "../pages";
import {fireEvent} from '@testing-library/react';


describe('Login render page',()=>{
    test('renders', ()=>{
        const { getByTestId, getByText } =  renderWithProviders(<Router><Login /></Router>) 
        expect(getByText(/login/i)).toBeInTheDocument();
        expect(getByTestId('form')).toBeInTheDocument()
    })
    test('render 3 input components', () => {
        const {getByLabelText } =  renderWithProviders(<Router><Login /></Router>);
        expect(getByLabelText(/email/i)).toBeInTheDocument();
        expect(getByLabelText('Password')).toBeInTheDocument();
        expect(getByLabelText(/Confirm Password/i)).toBeInTheDocument();
      });
    
      test('renders a login button', () => {
        const {getByText} = renderWithProviders(<Router><Login /></Router>);
        expect(getByText(/login/i)).toBeInTheDocument();
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

