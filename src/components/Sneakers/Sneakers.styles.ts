import { createUseStyles } from "react-jss";
import { Theme, getMainShadowStyle } from "../../styles";
import menSneakersBanner from '../../assets/men-sneakers-banner.png';

export default createUseStyles((theme: Theme) => ({
    sneakers: {
        width: '100%',
        height: '100%',
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
        '& label': {
            display: 'flex'
        }
    },
    sneakersContainerList: {
        width: '80%',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    }
}))