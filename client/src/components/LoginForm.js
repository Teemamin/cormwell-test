import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import classes from '../styles/AuthForm.module.css'
import Alert from 'react-bootstrap/Alert';
import useLogin from '../hooks/useLogin';


const initialState = {
    email: {
        value: '',
        type: 'email',
        validate: true,
    },
    password: {
        value: '',
        type: 'password',
        validate: true,
    },
    confirmPassword: {
        value: '',
        type: 'confirmPassword',
        key: 'password', //Key is the unique identifier to compare password against.
        validate: true
    },
}


export const LoginForm = (props) => {
    const {onSubmit, formData, errors, validateInput, onChange, apiError } = useLogin(initialState);

    const validate = event => {
        validateInput(event, formData)
    }

    return (
        <Form data-testid="form" className={classes.formWrapper} onSubmit={onSubmit}>
            <h3 className='text-center'>Login</h3>
             {apiError &&  <Alert variant="warning">
                {apiError}
              </Alert>}
        <Form.Group className="" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email"  name={formData?.email?.type} placeholder="Enter email" value={formData?.email?.value}
             onChange={onChange} />
            {errors?.email && <span className={classes.error}>{errors?.email}</span>}
        </Form.Group>

        <Form.Group className="" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name={formData?.password.type} placeholder="Password" value={formData?.password?.value}
                onChange={onChange} onBlur={validate} 
                />
                {errors?.password && <span className={classes.error}>{errors?.password}</span>}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" name={formData?.confirmPassword.type} placeholder="Confirm Password" value={formData?.confirmPassword.value}
                onChange={onChange}onBlur={validate} 
                />
                {errors?.confirmPassword && <span className={classes.error}>{errors?.confirmPassword}</span>}
            </Form.Group>
           
        <Button variant="primary" type="submit">
            Login
        </Button>
    </Form>
    )
}