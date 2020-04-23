import { createUseStyles } from "react-jss";
import { Theme } from "../../styles";
import signInBg from '../../assets/signin-bg.jpg';
import { getMainShadowStyle, getBackgroundStyle, getInsetShadowStyle } from "../../styles/selectors.styles";

export default createUseStyles((theme: Theme) => ({
    signIn: {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 'calc(100vh - 80px)',
        background: `url(${signInBg}) no-repeat`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: '50% 100%',
    },
    signInFormContainer: {
        height: '100%',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
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
            marginTop: '50px',
        }
    },
    signInHeader: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: '15px',
        '& svg': {
            fontSize: '2.5rem',
        },
        '& h2, p': {
            marginTop: '15px'
        },
    },
    signInIcon: {
        height: '60px',
        width: '60px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '100%',
        boxShadow: getInsetShadowStyle(theme),
    },
    signInFormInput: {
        marginTop: '15px',
    },
    signInRegister: {
        display: 'flex',
        marginTop: '30px',
        '& button': {
            marginLeft: '10px'
        }
    },
}))