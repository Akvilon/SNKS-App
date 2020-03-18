import { createUseStyles } from "react-jss";
import { Theme, baseFontSize, getTextHoverStyle } from "../../styles";
import {
    getTextStyle,
    getContrastTextStyle,
    getBackgroundStyle,
    getBtnBackgroundStyle,
    getBtnHoverBackgroundStyle,
    getBtnHoverBorderStyle
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
        border: 'none',
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
        color: getTextStyle(theme),
        background: getBackgroundStyle(theme),
        '&:hover': {
            border: getBtnHoverBorderStyle(theme)
        }
    },
    primaryBtn: {
        color: getContrastTextStyle(theme),
        background: getBtnBackgroundStyle(theme),
        '&:hover': {
            color: getContrastTextStyle(theme),
            background: getBtnHoverBackgroundStyle(theme),
        }
    },
    textBtn: {
        height: '100%',
        width: 'auto',
        borderRadius: '0px',
        background: 'none',
        '&:hover': {
            color: getTextHoverStyle(theme)
        }
    }
}))