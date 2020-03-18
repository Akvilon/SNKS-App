import * as React from 'react';
import { useTheme } from 'react-jss';
import useStyles, { ButtonVariant } from './Button.styles';

type ButtonProps = {
    type?: any,
    variant: string,
    onClick: (e: React.MouseEvent | React.KeyboardEvent) => void
}

const Button: React.FC<ButtonProps> = ({ variant, type, onClick, children }) => {
    const theme = useTheme();
    const classes = useStyles({ theme });
    let btnClass;
    
    if(variant === ButtonVariant.PRIMARY) {
        btnClass = `${classes.snksButton} ${classes.primaryBtn}`
    }else if(variant === ButtonVariant.TEXT) {
        btnClass = `${classes.snksButton} ${classes.textBtn}`
    }else {
        btnClass = `${classes.snksButton} ${classes.defaultBtn}`
    }

    return (
        <>
            <button className={btnClass} type={type} onClick={onClick}>
                {children}
            </button>
        </>
    )
}

export { Button };