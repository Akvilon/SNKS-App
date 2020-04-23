import { createUseStyles } from "react-jss";
import { Theme, getMainShadowStyle } from "../../styles";


export default createUseStyles((theme: Theme) => ({
    sneakersListBlock: {
        height: '452px',
        width: 'calc(33.333% - 32px)',
        marginTop: '24px',
        padding: '0px 20px',
        boxShadow: getMainShadowStyle(theme),
    },
    sneakersListBlockImg: {
        display: 'flex',
        justifyContent: 'center',
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
    }
}))