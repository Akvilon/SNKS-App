import { createUseStyles } from "react-jss";
import { Theme } from "../../styles";


export default createUseStyles((theme: Theme) => ({
    sneakerCard: {
        '& h2': {
            padding: '30px 0px'
        },
        '& p': {
            lineHeight: '30px'
        }
    },
    sneakerCardImg: {
        width: '100%',
        maxHeight: '400px',
        '& img': {
            height: '400px'
        }
    }
}))