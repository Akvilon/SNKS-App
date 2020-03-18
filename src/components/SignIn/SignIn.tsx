import * as React from 'react';
import { useTheme } from 'react-jss';
import useStyles from './SignIn.styles';
import { Button } from '../../utils/Button';
import { ButtonVariant } from '../../utils/Button/Button.styles';

const SignIn = () => {
    const theme = useTheme();
    const classes = useStyles({ theme })

    const handleButton = (e: React.MouseEvent | React.KeyboardEvent) => {
        e.preventDefault();
        console.log('LOGIN');
    }

    const goToRegister = (e: React.MouseEvent | React.KeyboardEvent) => {
        e.preventDefault();
        console.log('GO TO REG');
    }

    return (
        <div className={classes.signIn}>
            <div className={classes.signInBg}>
                <div className={classes.signInBgLeft}></div>
                <div className={classes.signInBgRight}></div>
            </div>
            <div className={classes.signInLayout}>
                <div className={classes.signInForm}>
                    <div className={classes.signInHeader}>
                        <i className="far fa-user"></i>
                        <h2>SIGN IN</h2>
                        <p>Login using your email and password</p>
                    </div>
                    <form>
                        <div className={classes.signInFormInput}>
                            <p>Email</p>
                            <input type="email" name="email" />
                        </div>
                        <div className={classes.signInFormInput}>
                            <p>Password</p>
                            <input type="password" name="password" />
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
            </div>
        </div>
    )
}


export { SignIn }