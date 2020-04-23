import * as React from 'react';
import { useTheme } from 'react-jss';
import useStyles from './SignIn.styles';
import { Button } from '../../utils/Button';
import { ButtonVariant } from '../../utils/Button/Button.styles';
import { useState } from 'react';
import { Input } from '../../utils/Input';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { FormError } from '../../utils/FormError';
import { FormValues } from '../../models/FormValues';
import { Register } from '../Register';
import { RouteProps, Redirect } from 'react-router';
import * as CONST from '../../constants';
import { Blackout } from '../../utils/Blackout';

type SignInProps = {
    getUserByEmail: (values: FormValues) => void,
    signInValidationError: string,
}

const initialValues: FormValues = {
    email: '',
    password: '',
}

const validationSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email')
        .required('Email is required'),
    password: Yup.string()
        .required('Password is required'),
})

const SignIn: React.FC<SignInProps> = ({ getUserByEmail, signInValidationError }) => {
    const theme = useTheme();
    const classes = useStyles({ theme })
    const [toggleForm, setToggleForm] = useState<boolean>(false);

    const goToRegister = (e: React.MouseEvent | React.KeyboardEvent) => {
        e.preventDefault();
        setToggleForm(true);
    }

    const goToSignIn = (key: boolean) => {
        setToggleForm(key);
    }

    const handleSubmit = (values: FormValues) => {
        getUserByEmail(values)
    }

    const renderSignInForm = () => {
        return (
            <div className={classes.signInForm}>
                <div className={classes.signInHeader}>
                    <div className={classes.signInIcon}>
                        <i className="far fa-user"></i>
                    </div>
                    <h2>SIGN IN</h2>
                    <p>Login using your email and password</p>
                </div>
                <Formik
                    initialValues={initialValues}
                    onSubmit={handleSubmit}
                    validationSchema={validationSchema}>
                    {({ errors, dirty, touched, isValid }) => (
                        <Form>
                            <div className={classes.signInFormInput}>
                                <Field name="email" type="email" label="Email" as={Input} />
                                <FormError>
                                    {errors.email && touched.email && <span>{errors.email}</span>}
                                </FormError>
                            </div>
                            <div className={classes.signInFormInput}>
                                <Field name="password" type="password" label="Password" as={Input} />
                                <FormError>
                                    {errors.password && touched.password && <span>{errors.password}</span>}
                                </FormError>
                                <FormError>
                                    {signInValidationError && <span>{signInValidationError}</span>}
                                </FormError>
                            </div>
                            <Button type="submit" variant={ButtonVariant.PRIMARY} disabled={!dirty || !isValid}>
                                <h2>SIGN IN</h2>
                            </Button>
                        </Form>
                    )}
                </Formik>
                <div className={classes.signInRegister}>
                    <p>Haven't an account yet?</p>
                    <Button type="button" variant={ButtonVariant.TEXT} onClick={goToRegister}>
                        <h2>Register</h2>
                    </Button>
                </div>
            </div>
        )
    }

    return (
        <div className={classes.signIn}>
            <Blackout>
                <div className={classes.signInFormContainer}>
                    {toggleForm ? <Register onSetToggleForm={goToSignIn} /> : renderSignInForm()}
                </div>
            </Blackout>
        </div>
    )
}


export { SignIn }