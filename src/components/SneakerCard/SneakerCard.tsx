import * as React from 'react';
import { useTheme } from 'react-jss';
import useStyles from './SneakerCard.styles';
import { RouteComponentProps } from 'react-router';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Sneaker } from '../../models/Sneaker';
import { Spinner } from '../../utils/Spinner';
import { Button } from '../../utils/Button';
import { ButtonVariant } from '../../utils/Button/Button.styles';
import { Product } from '../../models/Product';

type OwnProps = {
    sneaker: Sneaker | undefined
    getSneaker: (id: string) => void
    addCartItem: (item: Product) => void
}

interface RouteParams {
    id: string
}

const SneakerCard: React.FC<OwnProps & RouteComponentProps> = ({ sneaker, getSneaker, addCartItem, ...props }) => {
    const theme = useTheme();
    const classes = useStyles(theme)
    const params = useParams<RouteParams>();


    useEffect(() => {
        getSneaker(params.id)
    }, [])

    const renderSneaker = (sneaker: Sneaker) => {
        console.log('sneaker',sneaker)
        return (
            <div className={classes.sneakerCard}>
                <div className={classes.sneakerCardImg}>
                    <img src={sneaker.Product.media.imageUrl} alt="sneaker image" />
                </div>
                <Button
                    variant={ButtonVariant.PRIMARY}
                    onClick={() => addCartItem(sneaker.Product)}
                >
                    BUY NOW!
                </Button>
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