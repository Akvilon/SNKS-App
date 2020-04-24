import { Theme } from "../../styles";
import { createUseStyles } from "react-jss";
import {
    getBackgroundStyle,
    getMainShadowStyle,
    getTextStyle,
    getTextHoverStyle,
    getBorderStyle
} from "../../styles/selectors.styles";

export default createUseStyles((theme: Theme) => ({
    header: {
        display: 'flex',
        width: '100%',
        height: '80px',
        background: getBackgroundStyle(theme),
        boxShadow: getMainShadowStyle(theme),
        '& nav': {
            display: 'flex',
            marginLeft: 'auto',
        },
        '& a': {
            display: 'flex',
            alignItems: 'center',
            height: '100%',
            padding: '0px 30px',
            fontSize: '1.250rem',
            fontWeight: 'bold',
            color: getTextStyle(theme),
            transition: '.3s',
            '&:hover': {
                color: getTextHoverStyle(theme),
                transition: '.3s',
            },
        },
    },
    logo: {
        display: 'flex',
        alignItems: 'center',
        marginLeft: '30px',
        '& img': {
            width: '100px'
        },
    },
    active: {
        color: getTextHoverStyle(theme),
        fontSize: '3rem'
    },
    profileLink: {
        borderLeft: `1px solid ${getBorderStyle(theme)}`,
        marginLeft: '30px',
        '& a': {
            padding: '0px 60px'
        }
    }
}))

