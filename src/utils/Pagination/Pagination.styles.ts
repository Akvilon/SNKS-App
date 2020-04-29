import { createUseStyles } from "react-jss";
import { Theme } from "../../styles";

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
        alignItems: 'center',
        '& p': {
            marginLeft: '8px'
        }
    },
    paginationLastPage: {
        display: 'flex',
        alignItems: 'center',
        '& p': {
            marginLeft: '8px'
        }
    }
}))