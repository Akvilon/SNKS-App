import * as React from 'react';
import { useTheme } from 'react-jss';
import useStyles from './Blackout.styles';



const Blackout: React.FC = ({ children }) => {
    const theme = useTheme();
    const classes = useStyles()
    return (
        <div className={classes.blackout}>
            {children}
        </div>
    )
}

export { Blackout }