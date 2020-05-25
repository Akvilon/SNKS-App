import { createUseStyles } from "react-jss";
import { Theme, getBackgroundStyle, getMainShadowStyle } from "../../styles";



export default createUseStyles((theme: Theme) => ({
    mainWithInner: {
        display: 'flex',
        alignItems: 'center',
        height: `calc(100% - 160px)`,
    },
    content: {
        maxWidth: '1224px',
        width: '100%',
        height: 'calc(100% - 60px)',
        margin: '0 auto',
        padding: '30px',
        boxSizing: 'border-box',
        background: getBackgroundStyle(theme),
        boxShadow: getMainShadowStyle(theme),
    }
}))