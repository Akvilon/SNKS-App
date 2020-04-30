import { createUseStyles } from "react-jss";
import { Theme, getTextStyle } from "../../styles";

export default createUseStyles((theme: Theme) => ({
    pagination: {
        display: 'flex',
        '& button': {
            height: 'auto',
            width: 'auto',
            minWidth: 'auto',
            borderRadius: '0px',
            marginLeft: '8px',
            padding: '16px'
        }
    },
    paginationFirstPage: {
        display: 'flex',
        alignItems: 'flex-end',     
    },
    paginationLastPage: {
        display: 'flex',
        alignItems: 'flex-end',
    },
    paginationDots: {
        fontSize: '1rem',
        marginLeft: '8px',
        color: getTextStyle(theme)
    }
}))