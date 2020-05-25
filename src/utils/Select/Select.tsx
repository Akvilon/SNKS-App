import * as React from 'react';
import { useTheme } from 'react-jss';
import useStyles from './Select.styles';
import { SelectModel } from '../../models/SelectModel';
import { v4 as uuidv4 } from 'uuid';

type SelectProps = {
    options: Array<SelectModel>;
    selectedValue: string;
    onChange: (event: React.FormEvent<HTMLSelectElement>) => void
}

const Select: React.FC<SelectProps> = ({ options, onChange, selectedValue }) => {
    const theme = useTheme();
    const classes = useStyles(theme)
    return (
        <select
            name="select"
            onChange={(event) => onChange(event)}
            value={selectedValue}>
            {
                options.map(option => {
                    return (
                        <option
                            key={uuidv4()}
                            value={option.value}
                        >{option.label}</option>
                    )
                })
            }
        </select>
    )
}


export { Select }