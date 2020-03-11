import { Theme } from "../../styles";
import { createUseStyles } from "react-jss";
import { getMainBackground, getMainShadow, getMainText } from "../../styles/styles.selectors";

export default createUseStyles((theme: Theme) => ({
    header: {
        display: 'flex',
        width: '100%',
        height: '80px',
        background: getMainBackground(theme),
        boxShadow: getMainShadow(theme),
        '& nav': {
            display: 'flex',
            marginLeft: 'auto',
            marginRight: '15px',
            '& a': {
                display: 'flex',
                alignItems: 'center',
                height: '100%',
                padding: '0px 15px',
                fontWeight: 'bold',
                color: getMainText(theme)
            }
        },
    },
    logo: {
        display: 'flex',
        alignItems: 'center',
        marginLeft: '30px',
        '& img': {
            width: '80px'
        },
    },
    signIn: {
        minWidth: '120px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderLeft: `1px solid ${getMainText(theme)}`,
    }
}))

