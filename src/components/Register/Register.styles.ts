import { createUseStyles } from "react-jss";
import { Theme, getMainShadowStyle, getBackgroundStyle, secondaryFontSize, getInsetShadowStyle } from "../../styles";


export default createUseStyles((theme: Theme) => ({
    registerForm: {
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
    registerHeader: {
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
        '& p:last-child': {
            textAlign: 'center',
            fontSize: secondaryFontSize
        }
    },
    registerIcon: {
        height: '60px',
        width: '60px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '100%',
        boxShadow: getInsetShadowStyle(theme),
    },
    registerFormInput: {
        marginTop: '15px',
    },
    backToSignIn: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '30px'
    }
}))