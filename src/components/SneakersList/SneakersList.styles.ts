import { createUseStyles } from "react-jss";
import { Theme, getMainShadowStyle } from "../../styles";


export default createUseStyles((theme: Theme) => ({
    sneakersListBlock: {
        height: '452px',
        width: '30%',
        minWidth: '437px',
        marginTop: '24px',
        marginLeft: '3.3%',
        padding: '0px 20px',
        boxShadow: getMainShadowStyle(theme),
    },
    sneakersListBlockImg: {
        display: 'flex',
        justifyContent: 'center',
        maxHeight: '283px',
        '& img': {
            width: '100%',
            height: 'auto',
        }
    },
    sneakersListBlockInfo: {
        padding: '20px 0px',
        '& p:first-child': {
            fontSize: '1.5rem',
            textTransform: 'capitalize'
        },
        '& p:last-child': {
            fontSize: '1.75rem',
            paddingTop: '12px'
        },
    },
    
}))