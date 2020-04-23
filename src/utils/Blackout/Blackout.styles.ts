import { createUseStyles } from "react-jss";
import { Theme, getBlackoutBackgroundStyle } from "../../styles";


export default createUseStyles((theme: Theme) => ({
    blackout: {
        height: '100%',
        width: '100%',
        background: getBlackoutBackgroundStyle(theme)
    },
}))