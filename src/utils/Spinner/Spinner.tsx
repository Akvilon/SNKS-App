import * as React from 'react';
import { useTheme } from 'react-jss';
import useStyles from './Spinner.styles';
import loader from '../../assets/loader.svg';

const Spinner = () => {
    const theme = useTheme();
    const classes = useStyles(theme);
    return (
        <div className={classes.spinner}>
            <div className={classes.spinnerIcon}>
                <img src={loader} alt="loader" />
                <div className={classes.spinnerDots}>
                    <div className={classes.spinnerFirstDot}></div>
                    <div className={classes.spinnerSecondDot}></div>
                    <div className={classes.spinnerThirdDot}></div>
                </div>
            </div>
        </div>
    )
}

export { Spinner };