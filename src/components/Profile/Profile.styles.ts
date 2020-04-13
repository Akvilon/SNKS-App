import { createUseStyles } from "react-jss";
import { Theme, getBackgroundStyle, getMainShadowStyle, getContrastBackgroundStyle, getContrastTextStyle } from "../../styles";


export default createUseStyles((theme: Theme) => ({
    profile: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        minHeight: '600px',
        width: '100%',
        padding: '120px 0px'
    },
    profileInner: {
        display: 'flex',
        height: '100%',
        minHeight: '600px',
        maxWidth: '900px',
        width: '100%',
        background: getBackgroundStyle(theme),
        boxShadow: getMainShadowStyle(theme)
    },
    profileTabs: {
        display: 'flex',
        flexDirection: 'column',
        background: getContrastBackgroundStyle(theme)
    },
    profileTabContent: {
        padding: '30px'
    },
    logoutBtn: {
        padding: '30px',
        marginTop: 'auto',
        '& button': {
            color: getContrastTextStyle(theme)
        }
    }
}))