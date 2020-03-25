import * as React from 'react';
import { useTheme } from 'react-jss';
import useStyles from './Input.styles';

type InputProps = {
    label: string,
    type: string,
    value?: string,
    id?: string,
    name: string,
    placeholder?: string,
    onBlur: (e:React.FocusEvent) => void,
    onChange: (e: React.ChangeEvent) => void
}

const Input: React.FC<InputProps> = ({ label, type, value, id, name, placeholder, onBlur, onChange }) => {
    const theme = useTheme();
    const classes = useStyles({ theme });

    return (
        <>
            <label className={classes.snksInputLabel} htmlFor={id}>{label}</label>
            <input
                className={classes.snksInput}
                type={type}
                value={value}
                id={id}
                name={name} 
                placeholder={placeholder}
                onBlur={onBlur}
                onChange={onChange}/>
        </>
    )
}

export { Input };