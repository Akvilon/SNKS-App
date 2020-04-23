import * as React from 'react';
import { useTheme } from 'react-jss';
import useStyles from './Checkbox.styles';

type CheckboxProps = {
    name: string;
    checked: boolean
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Checkbox: React.FC<CheckboxProps> = ({name, checked, onChange}) => {
    const theme = useTheme();
    const classes = useStyles(theme);
    return (
        <div>
            <input type="checkbox" name={name} checked={checked} onChange={onChange} />
        </div>
    )
}

export {Checkbox}