import { createUseStyles } from "react-jss";
import { Theme } from "../../styles";
import { relative } from "path";
import gignInBg from '../../assets/gignin_bg.jpg';
import signInBg2 from '../../assets/signin_bg2.jpg';
import { getModalLayoutStyle, getMainShadowStyle, getBackgroundStyle } from "../../styles/selectors.styles";

export default createUseStyles((theme: Theme) => ({
    signIn: {
        height: '100%',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '10px 0px'
    },
    signInBg: {
        display: 'flex',
        height: '100%',
        width: '100%',
    },
    signInBgLeft: {
        height: '100%',
        width: '100%',
        background: `url(${gignInBg}) no-repeat`,
        backgroundSize: '90%',
        backgroundPosition: '50% 50%'
    },
    signInBgRight: {
        height: '100%',
        width: '100%',
        background: `url(${signInBg2}) no-repeat`,
        backgroundSize: '90%',
        backgroundPosition: '50% 50%'
    },
    signInLayout: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: getModalLayoutStyle(theme),
        backdropFilter: 'blur(5px)'
    },
    signInForm: {
        minWidth: '400px',
        padding: '60px',
        boxShadow: getMainShadowStyle(theme),
        borderRadius: '4px',
        display: 'flex',
        flexDirection: 'column',
        background: getBackgroundStyle(theme),
        '& button': {
            marginTop: '30px',
        }
    },
    signInFormInput: {
        height: '40px',
        marginBottom: '40px',
        '& p': {
            color: '#1F1C1C',
            fontWeight: 'bold',
            fontSize: '1rem',
            marginBottom: '5px'
        },
        '& input': {
            height: '100%',
            width: '100%',
            borderRadius: '4px',
            border: 'none',
            paddingLeft: '15px',
            boxShadow: getMainShadowStyle(theme)
        },
    },
}))