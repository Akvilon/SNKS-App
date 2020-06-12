import { createUseStyles } from "react-jss";
import { Theme, getBlackoutBackgroundStyle, getBackgroundStyle, getMainShadowStyle } from "../../styles";



export default createUseStyles((theme: Theme) => ({
    modalWrapper: {
        position: 'absolute',
        top: 0,
        width: '100%',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: getBlackoutBackgroundStyle(theme),
    },
    modal: {
        minWidth: '600px',
        padding: '30px',
        background: getBackgroundStyle(theme),
        borderRadius: '4px',
        boxShadow: getMainShadowStyle(theme),
        position: 'relative'
    },
    modalCloseIcon: {
        position: 'absolute',
        top: '0px',
        right: '0px',
        height: '30px',
        width: '30px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        fontSize: '1.250rem'
    },
}))