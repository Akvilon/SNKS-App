import * as React from 'react';
import { useTheme } from 'react-jss';
import useStyles from './Input.styles';

type InputProps = {
    label: string,
    type: string,
    id?: string,
    name: string,
    placeholder?: string,
    onChange: (e: React.ChangeEvent) => void
}

const Input: React.FC<InputProps> = ({ label, type, id, name, placeholder, onChange }) => {
    const theme = useTheme();
    const classes = useStyles({ theme });

    return (
        <>
            <label className={classes.snksInputLabel} htmlFor={id}>{label}</label>
            <input
                className={classes.snksInput}
                type={type}
                id={id}
                name={name} 
                placeholder={placeholder}
                onChange={onChange}/>
        </>
    )
}

export { Input };