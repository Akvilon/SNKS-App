import { createUseStyles } from "react-jss";
import { Theme, getBorderStyle, getMainShadowStyle } from "../../styles";



export default createUseStyles((theme: Theme) => ({
    cartItem: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '15px 30px',
        boxShadow: getMainShadowStyle(theme),
        borderRadius: '4px',
        cursor: 'pointer',
        '& img': {
            height: '80px',
            width: '110px'
        }
    }
}))