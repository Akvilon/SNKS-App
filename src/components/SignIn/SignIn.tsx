import * as React from 'react';
import { useTheme } from 'react-jss';
import useStyles from './SignIn.styles';
import { Button } from '../../utils/Button';
import { ButtonVariant } from '../../utils/Button/Button.styles';
import { useState } from 'react';
import { Input } from '../../utils/Input';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FormError } from '../../utils/FormError';

type FormValues = {
    name: string,
    email: string;
    password: string;
}

const initialValues: FormValues = {
    name: '',
    email: '',
    password: ''
}

const validationSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Name is too short')
        .required('Name is required'),
    email: Yup.string()
        .email('Invalid email')
        .required('Email is required'),
    password: Yup.string()
        .required('Password is required')
})

const SignIn = () => {
    const theme = useTheme();
    const classes = useStyles({ theme })
    const [toggleForm, setToggleForm] = useState<boolean>(false);
    console.log(toggleForm);

    const goToRegister = (e: React.MouseEvent | React.KeyboardEvent) => {
        e.preventDefault();
        setToggleForm(true);
    }

    const backToSignIn = (e: React.MouseEvent | React.KeyboardEvent) => {
        e.preventDefault();
        setToggleForm(false);
    }

    const handleSubmit = (values: FormValues) => {
        alert(JSON.stringify(values))
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
    const renderRegisterForm = () => {
        return (
            <div className={classes.registerForm}>
                <div className={classes.registerHeader}>
                    <div className={classes.registerIcon}>
                        <i className="far fa-user"></i>
                    </div>
                    <h2>REGISTER</h2>
                    <p>Register using your email and password</p>
                    <p>Registration allows you enter into your profile, change app theme, view history of your byings etc.</p>
                </div>
                <Formik
                    initialValues={initialValues}
                    onSubmit={handleSubmit}
                    validationSchema={validationSchema}
                >
                    {({ errors, dirty, touched, isValid }) => (
                        <Form>
                            <div className={classes.signInFormInput}>
                                <Field name="name" type="input" label="Name" as={Input} />
                                <FormError>
                                    {errors.name && touched.name && <span>{errors.name}</span>}
                                </FormError>
                            </div>
                            <div className={classes.registerFormInput}>
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
                            </div>
                            <div className={classes.signInFormInput}>
                                <Field name="confirm password" type="password" label="Confirm password" as={Input} />
                            </div>
                            <Button type="submit" variant={ButtonVariant.PRIMARY} disabled={!dirty || !isValid}>
                                <h2>REGISTER</h2>
                            </Button>
                        </Form>
                    )}
                </Formik>
                <div className={classes.backToSignIn}>
                    <Button type="button" variant={ButtonVariant.TEXT} onClick={backToSignIn}>
                        <h2>Back to Sign in</h2>
                    </Button>
                </div>
            </div>
        )
    }

    return (
        <div className={classes.signIn}>
            <div className={classes.signInBg}>
                <div className={classes.signInBgLeft}></div>
                <div className={classes.signInBgRight}></div>
            </div>
            <div className={classes.signInLayout}>
                {toggleForm ? renderRegisterForm() : renderSignInForm()}
            </div>
        </div>
    )
}


export { SignIn }