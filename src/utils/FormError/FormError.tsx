import * as React from 'react';
import { useTheme } from 'react-jss';
import useStyles from './FormError.styles';

type FormErrorProps = {
    children: React.ReactNode;
}
const FormError: React.FC<FormErrorProps> = ({ children }) => {
    const theme = useTheme();
    const classes = useStyles(theme);
    return (
        <div className={classes.formError}>
            {children}
        </div>

    )
}

export {FormError};