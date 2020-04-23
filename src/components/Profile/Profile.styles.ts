import { createUseStyles } from "react-jss";
import { Theme, getBackgroundStyle, getMainShadowStyle, getContrastBackgroundStyle, getContrastTextStyle } from "../../styles";


export default createUseStyles((theme: Theme) => ({
    profile: {
        display: 'flex',
        height: '100%',
        width: '100%',
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