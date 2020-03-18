import { createUseStyles } from "react-jss";
import { 
    Theme, 
    baseFontSize,
    getTextStyle,
    getContrastTextStyle,
    getBackgroundStyle,
    getBtnBackgroundStyle,
    getBtnHoverBackgroundStyle,
    getBtnHoverBorderStyle, 
    getTextHoverStyle, 
    getBorderStyle, 
    getBtnBorderStyle 
} from "../../styles";



export enum ButtonVariant {
    DEFAULT='defaultBtn',
    PRIMARY='primaryBtn',
    TEXT='textBtn'
}

export default createUseStyles((theme: Theme) => ({
    snksButton: {
        height: '38px',
        width: '100%',
        borderRadius: '4px',
        border: `1px solid ${getBtnBorderStyle(theme)}`,
        cursor: 'pointer',
        fontWeight: 'bold',
        fontSize: '1rem',
        transition: '.3s',
        padding: 0,
        '&:hover': {
            transition: '.3s',
        },
        '& h1,h2,h3,h4,h5,h6,p,span': {
            fontSize: baseFontSize
        }
    },
    defaultBtn: {
        background: getBackgroundStyle(theme),
        '&:hover': {
            border: getBtnHoverBorderStyle(theme)
        }
    },
    primaryBtn: {
        color: getContrastTextStyle(theme),
        background: getBtnBackgroundStyle(theme),
        '&:hover': {
            background: getBtnHoverBackgroundStyle(theme),
            border:  getBtnHoverBorderStyle(theme)
        }
    },
    textBtn: {
        height: '100%',
        width: 'auto',
        border: 'none',
        borderRadius: '0px',
        background: 'none',
        '&:hover': {
            color: getTextHoverStyle(theme)
        }
    }
}))