import * as React from 'react';
import { useTheme } from 'react-jss';
import useStyles, { ButtonVariant } from './Button.styles';

type ButtonProps = {
    type?: any,
    variant: string,
    disabled?: boolean,
    onClick?: (e: React.MouseEvent | React.KeyboardEvent) => void
}

const Button: React.FC<ButtonProps> = ({ variant, type, onClick, disabled, children }) => {
    const theme = useTheme();
    const classes = useStyles({ theme });
    let btnClass;
    
    if(variant === ButtonVariant.PRIMARY) {
        btnClass = disabled ? `${classes.snksButton} ${classes.primaryBtn} ${classes.primaryBtnDisabled}` : `${classes.snksButton} ${classes.primaryBtn}`
    }else if(variant === ButtonVariant.TEXT) {
        btnClass = disabled ? `${classes.snksButton} ${classes.textBtn} ${classes.teaxtBtnDisabled}` : `${classes.snksButton} ${classes.textBtn}`
    }else {
        btnClass = disabled ? `${classes.snksButton} ${classes.defaultBtn} ${classes.defaultBtnDisabled}` : `${classes.snksButton} ${classes.defaultBtn}`
    }

    return (
        <>
            <button className={btnClass} type={type} disabled={disabled} onClick={onClick}>
                {children}
            </button>
        </>
    )
}

export { Button };