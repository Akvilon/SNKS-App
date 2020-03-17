import { Theme } from "../../styles";
import { createUseStyles } from "react-jss";
import { 
    getBackgroundStyle, 
    getMainShadowStyle, 
    getTextStyle, 
    getTextHoverStyle, 
    getBorderStyle} from "../../styles/selectors.styles";

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
            paddingRight: '30px',
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
    signIn: {
        minWidth: '120px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderLeft: `1px solid ${getBorderStyle(theme)}`,
        padding: '0px 30px',
    }
}))

