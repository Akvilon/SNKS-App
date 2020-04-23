import { createUseStyles } from "react-jss";
import { Theme, getMainShadowStyle, getContrastTextStyle } from "../../styles";
import homeBg from '../../assets/home-bg.png';
import mostPopularBg from '../../assets/most-popular-banner.png';

export default createUseStyles((theme: Theme) => ({
    home: {
        width: '100%',
    },
    top: {
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        width: '100%',
        height: 'calc(100vh - 80px)',
        background: `url('${homeBg}')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: '50% 100%',
    },
    scrollDown: {
        height: '100%',
        width: '100%',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    mostPopular: {
        maxWidth: '1224px',
        margin: '0 auto',
        padding: '80px 0px',
    },
    mostPopularBanner: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        height: '400px',
        marginTop: '24px',
        background: `url('${mostPopularBg}')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: '50% 100%',
        padding: '0px 20px',
        '& p': {
            color: getContrastTextStyle(theme),
            fontSize: '1.5rem'
        },
        '& p:last-child': {
            padding: '18px 0px 32px 0px',
            fontSize: '1.75rem'
        }
    },
    mostPopularList: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    mostPopularCard: {
        width: 'calc(33.333% - 24px)',
        height: '400px',
        marginTop: '24px',
        padding: '0px 20px',
        boxShadow: getMainShadowStyle(theme),
    },

    mostPopularCardImg: {
        height: '260px',
        display: 'flex',
        justifyContent: 'center',
        '& img': {
            width: '100%',
            height: 'auto',
        }
    },
    mostPopularCardInfo: {
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