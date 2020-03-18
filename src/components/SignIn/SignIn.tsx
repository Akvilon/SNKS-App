import * as React from 'react';
import { useTheme } from 'react-jss';
import useStyles from './SignIn.styles';
import { Button } from '../../utils/Button';
import { ButtonVariant } from '../../utils/Button/Button.styles';
import { useState } from 'react';
import { Input } from '../../utils/Input';

const SignIn = () => {
    const theme = useTheme();
    const classes = useStyles({ theme })
    const [toggleForm, setToggleForm] = useState<boolean>(false);

    const handleButton = (e: React.MouseEvent | React.KeyboardEvent) => {
        e.preventDefault();
        console.log('LOGIN');
    }

    const goToRegister = (e: React.MouseEvent | React.KeyboardEvent) => {
        e.preventDefault();
        setToggleForm(true);
    }

    const backToSignIn = (e: React.MouseEvent | React.KeyboardEvent) => {
        e.preventDefault();
        setToggleForm(false);
    }

    const onInputChangeHandler = () => {

    }

    const renderSignInForm = () => {
        return (
            <div className={classes.signInForm}>
                <div className={classes.signInHeader}>
                    <i className="far fa-user"></i>
                    <h2>SIGN IN</h2>
                    <p>Login using your email and password</p>
                </div>
                <form>
                    <div className={classes.signInFormInput}>
                        <Input
                            label={'Email'}
                            type={'email'}
                            name={'email'}
                            id={'email'}
                            onChange={onInputChangeHandler} />
                    </div>
                    <div className={classes.signInFormInput}>
                        <Input
                            label={'Password'}
                            type={'password'}
                            name={'password'}
                            id={'password'}
                            onChange={onInputChangeHandler} />
                    </div>
                    <Button variant={ButtonVariant.PRIMARY} onClick={handleButton}>
                        <h2>SIGN IN</h2>
                    </Button>
                </form>
                <div className={classes.signInRegister}>
                    <p>Haven't an account yet?</p>
                    <Button variant={ButtonVariant.TEXT} onClick={goToRegister}>
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
                    <i className="far fa-user"></i>
                    <h2>REGISTER</h2>
                    <p>Register using your email and password</p>
                    <p>Registration allows you enter into your profile, change app theme, view history of your byings etc.</p>
                </div>
                <form>
                    <div className={classes.registerFormInput}>
                        <Input
                            label={'Email'}
                            type={'email'}
                            name={'email'}
                            id={'email'}
                            onChange={onInputChangeHandler} />
                    </div>
                    <div className={classes.registerFormInput}>
                        <Input
                            label={'Password'}
                            type={'password'}
                            name={'password'}
                            id={'password'}
                            onChange={onInputChangeHandler} />
                    </div>
                    <div className={classes.registerFormInput}>
                        <Input
                            label={'Confirm password'}
                            type={'password'}
                            name={'confirm password'}
                            id={'confirmPassword'}
                            onChange={onInputChangeHandler} />
                    </div>
                    <Button variant={ButtonVariant.PRIMARY} onClick={handleButton}>
                        <h2>REGISTER</h2>
                    </Button>
                </form>
                <div className={classes.backToSignIn}>
                    <Button variant={ButtonVariant.TEXT} onClick={backToSignIn}>
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