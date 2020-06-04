import { createUseStyles } from "react-jss";
import { Theme, getBackgroundStyle, getMainShadowStyle } from "../../styles";



export default createUseStyles((theme: Theme) => ({
    mainWithInner: {
        display: 'flex',
        alignItems: 'center',
        flex: '1',
        // height: `calc(100% - 160px)`,
    },
    content: {
        maxWidth: '1224px',
        width: '100%',
        height: 'calc(100% - 80px)',
        margin: '30px auto',
        padding: '30px',
        boxSizing: 'border-box',
        background: getBackgroundStyle(theme),
        boxShadow: getMainShadowStyle(theme),
    }
}))