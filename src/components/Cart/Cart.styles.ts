import { createUseStyles } from "react-jss";
import { Theme } from "../../styles";



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
    }
}))