import { createUseStyles } from "react-jss";
import { Theme, getTextHoverStyle } from "../../styles";
import { relative } from "path";

export default createUseStyles((theme: Theme) => ({
    formError: {
        height: '20px',
        position: 'relative',
        '& h1, h2, h3, h4, h5, h6, p, span': {
            position: 'absolute',
            top:'4px',
            left:'0',
            fontSize: '0.750rem',
            color: getTextHoverStyle(theme)
        }
    }
}))