import { createUseStyles } from "react-jss";
import { Theme, getMainShadowStyle } from "../../styles";
import menSneakersBanner from '../../assets/men-sneakers-banner.png';

export default createUseStyles((theme: Theme) => ({
    sneakers: {
        width: '100%',
        height: '100%',
        '& h2': {
            fontSize: '2.25rem',
            fontWeight: '400',
        }
    },
    sneakersMenBanner: {
        height: '420px',
        width: '100%',
        background: `url('${menSneakersBanner}')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: '50% 100%',
    },
    sneakersWomenBanner: {
        height: '420px',
        width: '100%',
        background: `url('${menSneakersBanner}')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: '50% 100%',
    },
    sneakersContainer: {
        padding: '60px 40px 0px 40px'
    },
    sneakersContainerTop: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    sneakersContainerTopSort: {

    },
    sneakersContainerBody: {
        display: 'flex',
        height: '100%',
        width: '100%',
    },
    sneakersContainerFilters: {
        width: '20%',
        '& button': {
            textTransform: 'capitalize',
            borderRadius: '0px'
        },
        '& h3': {
            fontSize: '1.5rem',
            fontWeight: '400',
            padding: '24px 0px'
        }
    },
    sneakersContainerFiltersInner: {
        maxWidth: '200px',
    },
    sneakersContainerList: {
        width: '80%',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
    },
    sneakersShowMoreBtn: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '30px 0px',
        '& button': {
            width: '10%',
            minWidth: '145px'
        }
    }
}))