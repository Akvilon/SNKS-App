import { createUseStyles } from "react-jss";
import { Theme, secondaryFontSize } from "../../styles";
import { relative } from "path";
import gignInBg from '../../assets/gignin_bg.jpg';
import signInBg2 from '../../assets/signin_bg2.jpg';
import { getModalLayoutStyle, getMainShadowStyle, getBackgroundStyle, getBorderStyle, getTextStyle, getMainGradientStyle } from "../../styles/selectors.styles";

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
        width: '400px',
        padding: '40px',
        boxShadow: getMainShadowStyle(theme),
        borderRadius: '4px',
        display: 'flex',
        flexDirection: 'column',
        background: getBackgroundStyle(theme),
        '& form button': {
            marginTop: '60px',
        }
    },
    signInHeader: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& svg': {
            fontSize: '2.5rem',
        },
        '& h2, p': {
            marginTop: '15px'
        },
    },
    signInFormInput: {
        height: '40px',
        marginTop: '40px',
    },
    signInRegister: {
        display: 'flex',
        marginTop: '30px',
        '& button': {
            marginLeft: '10px'
        }
    },
    registerForm: {
        width: '400px',
        padding: '40px',
        boxShadow: getMainShadowStyle(theme),
        borderRadius: '4px',
        display: 'flex',
        flexDirection: 'column',
        background: getBackgroundStyle(theme),
        '& form button': {
            marginTop: '60px',
        }
    },
    registerHeader: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& svg': {
            fontSize: '2.5rem',
        },
        '& h2, p': {
            marginTop: '15px'
        },
        '& p:last-child': {
            textAlign: 'center',
            fontSize: secondaryFontSize
        }
    },
    registerFormInput: {
        height: '40px',
        marginTop: '40px',
    },
    backToSignIn: {
        marginTop: '30px'
    }
}))