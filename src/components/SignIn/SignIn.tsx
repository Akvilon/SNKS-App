import * as React from 'react';
import { useTheme } from 'react-jss';
import useStyles from './SignIn.styles';
import { Button } from '../../utils/Button';

const SignIn = () => {
    const theme = useTheme();
    const classes = useStyles({ theme })

    const handleButton = (e: React.MouseEvent | React.KeyboardEvent) => {
        e.preventDefault();
        console.log('LOGIN');
    }

    return (
        <div className={classes.signIn}>
            <div className={classes.signInBg}>
                <div className={classes.signInBgLeft}></div>
                <div className={classes.signInBgRight}></div>
            </div>
            <div className={classes.signInLayout}>
                <form className={classes.signInForm}>
                    <div className={classes.signInFormInput}>
                        <p>Email</p>
                        <input type="email" name="email"/>
                    </div>
                    <div className={classes.signInFormInput}>
                        <p>Password</p>
                        <input type="password" name="password" />
                    </div>
                    <Button variant={'primaryBtn'} onClick={handleButton}>
                        <h2>Sign in</h2>
                    </Button>
                </form>
                <div></div>
            </div>
        </div>
    )
}


export { SignIn }