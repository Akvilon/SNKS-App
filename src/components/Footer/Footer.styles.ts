import { createUseStyles } from "react-jss";
import { Theme, getBackgroundStyle, getMainShadowStyle } from "../../styles";


export default createUseStyles((theme: Theme) => ({
    footer: {
        width: '100%',
        height: '80px',
        background: getBackgroundStyle(theme),
        boxShadow: getMainShadowStyle(theme),
        // flex: '0 0 auto'
    }
}))