import * as React from 'react';
import { useTheme } from 'react-jss';
import useStyles from './Footer.styles';

const Footer = () => {
    const theme = useTheme()
    const classes = useStyles({ theme })
    return (
        <footer className={classes.footer}>
            <div>FOOTER</div>
        </footer>
    )
}

export {Footer}