import { createUseStyles } from "react-jss";
import { Theme, baseFontSize, getMainShadowStyle, getTextStyle } from "../../styles";


export default createUseStyles((theme: Theme) => ({
    snksInputLabel:{
        fontWeight: 'bold',
    },
    snksInput: {
        height: '100%',
            width: '100%',
            borderRadius: '4px',
            border: 'none',
            paddingLeft: '15px',
            boxShadow: getMainShadowStyle(theme)
    }
}))