import * as React from 'react';
import { User } from '../../models/User';
import { useEffect } from 'react';
import { useTheme } from 'react-jss';
import useStyles from './Home.styles';
import scrollDown from '../../assets/scroll-down-icon.svg';
import { Blackout } from '../../utils/Blackout';
import { Sneaker } from '../../models/SneakerListModel';


type HomeProps = {
    mostPopular: Array<Sneaker> | undefined,
    getActiveUser: () => void,
    getMostPopular: (sortType: string) => void
}

const Home: React.FC<HomeProps> = ({ getActiveUser, getMostPopular, mostPopular, ...props }) => {
    const theme = useTheme();
    const classes = useStyles(theme);
    useEffect(() => {
        getActiveUser();
        getMostPopular('most-active')
    }, [])
   
    return (

        <div className={classes.home}>
            <div className={classes.top}>
                <Blackout>
                    <div className={classes.scrollDown}>
                        <i><img src={scrollDown} alt="scroll down icon" /></i>
                    </div>
                </Blackout>
            </div>
            <div className={classes.mostPopular}>
                <h2>Most popular</h2>
                <div className={classes.mostPopularBanner}>
                    <p>Puma RS-X Reinvention</p>
                    <p>$ 120</p>
                </div>
                <div className={classes.mostPopularList}>
                    {
                        mostPopular ? mostPopular.map(product => {
                            return (
                                <div key={product.id} className={classes.mostPopularCard}>
                                    <div className={classes.mostPopularCardImg}>
                                        <img src={product.media.smallImageUrl} alt="sneaker image" />
                                    </div>
                                    <div className={classes.mostPopularCardInfo}>
                                        <p>{product.title}</p>
                                        <p>$&nbsp;{product.retailPrice}</p>
                                    </div>
                                </div>
                            )
                        }) : null
                    }
                </div>
            </div>
        </div>
    )
}

export { Home }