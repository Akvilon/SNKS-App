import { Theme } from ".";
import {
    getTextStyle,
    getContrastTextStyle,
    getBackgroundStyle,
    getBtnBackgroundStyle,
    getBtnHoverBackgroundStyle,
    getBtnHoverBorderStyle
} from "./selectors.styles";

// CUSTOM ELEMENTS LIBRARY
export default (theme: Theme) => ({
        // SNKS BUTTONS
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
            height: 'auto',
            borderRadius: '0px',
            '&:hover': {
                color: getContrastTextStyle(theme)
            }
        }
    })