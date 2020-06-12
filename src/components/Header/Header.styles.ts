import { Theme } from "../../styles";
import { createUseStyles } from "react-jss";
import {
    getBackgroundStyle,
    getMainShadowStyle,
    getTextStyle,
    getTextHoverStyle,
    getBorderStyle,
    getContrastTextStyle,
    getContrastBackgroundStyle,
    getBtnHoverBackgroundStyle
} from "../../styles/selectors.styles";

export default createUseStyles((theme: Theme) => ({
    header: {
        display: 'flex',
        width: '100%',
        height: '80px',
        minHeight: '80px',
        background: getBackgroundStyle(theme),
        boxShadow: getMainShadowStyle(theme),
    },
    nav: {
        display: 'flex',
        marginLeft: 'auto',
    },
    logo: {
        display: 'flex',
        alignItems: 'center',
        marginLeft: '30px',
        '& img': {
            width: '100px'
        },
    },
    link: {
        '& a': {
            display: 'flex',
            alignItems: 'center',
            height: '100%',
            padding: '0px 30px',
            fontSize: '1.250rem',
            fontWeight: 'bold',
            color: getTextStyle(theme),
            transition: '.3s',
            position: 'relative',
            '&:hover': {
                color: getTextHoverStyle(theme),
                transition: '.3s',
            },
        },
    },
    active: {
        '& a': {
            display: 'flex',
            alignItems: 'center',
            height: '100%',
            padding: '0px 30px',
            fontSize: '1.250rem',
            fontWeight: 'bold',
            color: getTextHoverStyle(theme),
            transition: '.3s',
            position: 'relative',
        },
    },
    profileLink: {
        borderLeft: `1px solid ${getBorderStyle(theme)}`,
        marginLeft: '30px',
        '& a': {
            padding: '0px 60px'
        }
    },
    langs: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: '30px',
        borderLeft: `1px solid ${getTextStyle(theme)}`
    },
    cartProductsAmount: {
        height: '20px',
        width: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: '25%',
        right: '18px',
        background: getBtnHoverBackgroundStyle(theme),
        borderRadius: '100%',
        '& span': {
            fontSize: '0.750rem',
            color: getContrastTextStyle(theme)
        }
    }
}))

