import * as React from 'react';
import { useTheme } from 'react-jss';
import useStyles from './SneakerCard.styles';
import { RouteComponentProps } from 'react-router';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Sneaker } from '../../models/Sneaker';
import { Spinner } from '../../utils/Spinner';


type OwnProps = {
    sneaker: Sneaker | undefined
    getSneaker: (id: string) => void
}

interface RouteParams {
    id: string
}

const SneakerCard: React.FC<OwnProps & RouteComponentProps> = ({ sneaker, getSneaker, ...props }) => {
    const theme = useTheme();
    const classes = useStyles(theme)
    const params = useParams<RouteParams>();


    useEffect(() => {
        getSneaker(params.id)
    }, [])

    const renderSneaker = (sneaker: Sneaker) => {
        return (
            <div className={classes.sneakerCard}>
                <div className={classes.sneakerCardImg}>
                    <img src={sneaker.Product.media.imageUrl} alt="sneaker image" />
                </div>
                <h2>{sneaker.Product.title.toUpperCase()}</h2>
                <p>{sneaker.Product.description.replace(/<[^>]+>/g, '')}</p>
            </div>
        )
    }


    return (
        <>
            {

                sneaker ? renderSneaker(sneaker) : <Spinner />

            }
        </>
    )
}

export { SneakerCard }