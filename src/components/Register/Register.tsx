import * as React from 'react';
import { Formik, Form, Field } from 'formik';
import { FormError } from '../../utils/FormError';
import { Button } from '../../utils/Button';
import * as Yup from 'yup';
import { useTheme } from 'react-jss';
import useStyles from './Register.styles';
import { Input } from '../../utils/Input';
import { ButtonVariant } from '../../utils/Button/Button.styles';
import { FormValues } from '../../models/FormValues';


type RegisterProps = {
    onSetToggleForm: (key: boolean) => void
    addUser: (values: FormValues) => void
}

const initialValues: FormValues = {
    name: '',
    email: '',
    password: '',
    passwordConfirmation: ''
}

const validationSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Name is too short')
        .required('Name is required'),
    email: Yup.string()
        .email('Invalid email')
        .required('Email is required'),
    password: Yup.string()
        .required('Password is required'),
    passwordConfirmation: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Password and confirm password does not match')
        .required('Password confirm is required')
})

const Register: React.FC<RegisterProps> = ({ onSetToggleForm, addUser }) => {
    const theme = useTheme();
    const classes = useStyles({ theme })

    const backToSignIn = (e: React.MouseEvent | React.KeyboardEvent) => {
        e.preventDefault();
        onSetToggleForm(false);
    }

    const handleSubmit = (values: FormValues) => {
        addUser(values)
    }

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
                {({ errors, dirty, touched, isValid, resetForm }) => (
                    <Form>
                        <div className={classes.registerFormInput}>
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
                        <div className={classes.registerFormInput}>
                            <Field name="password" type="password" label="Password" as={Input} />
                            <FormError>
                                {errors.password && touched.password && <span>{errors.password}</span>}
                            </FormError>
                        </div>
                        <div className={classes.registerFormInput}>
                            <Field name="passwordConfirmation" type="password" label="Confirm password" as={Input} />
                            <FormError>
                                {errors.passwordConfirmation && touched.passwordConfirmation && <span>{errors.passwordConfirmation}</span>}
                            </FormError>
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


export { Register };