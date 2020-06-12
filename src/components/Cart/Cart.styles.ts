import { createUseStyles } from "react-jss";
import { Theme, getTextStyle } from "../../styles";



export default createUseStyles((theme: Theme) => ({
    cartListBlock: {
        marginBottom: '30px',
        position: 'relative'
    },
    deleteIcon: {
        position: 'absolute',
        top: '5px',
        right: '5px',
        cursor: 'pointer',
        fontSize: '18px'
    },
    cartBottom: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginBottom: '30px',
        '& h2': {
            fontSize: '2rem'
        },
        '& p': {
            fontSize: '2rem',
            paddingLeft: '15px'
        },
        '& button': {
            marginLeft: '30px',
            maxWidth: '120px'
        }
    },
    cartModalText: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& p': {
            padding: '15px 0px'
        }
    },
    cartModalTextTitle: {
        display: 'flex',
        alignItems: 'center',
        '& h2:last-child': {
            paddingLeft: '15px',
        }
    },
    cartModalButtons: {
        display: 'flex',
        justifyContent: 'center',
        '& button': {
            maxWidth: '60px'
        },
        '& button:last-child': {
            marginLeft: '15px'
        }
    },
    emptyCart: {
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: getTextStyle(theme),
        fontSize: '2rem'
    }
}))