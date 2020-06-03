import { createUseStyles } from "react-jss";
import { Theme, getBorderStyle } from "../../styles";



export default createUseStyles((theme: Theme) => ({
    cartItem: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '15px 30px',
        border: `1px solid ${getBorderStyle(theme)}`,
        borderRadius: '4px',
        '& img': {
            height: '80px',
            width: '110px'
        }
    }
}))