import * as React from 'react';
import { useTheme } from 'react-jss';
import useStyles from './CartItem.styles';
import { Product } from '../../models/Product';

type CartItemProps = {
    cartItem: Product
}

const CartItem: React.FC<CartItemProps> = ({cartItem}) => {
    const theme = useTheme();
    const classes = useStyles(theme)
    
    return (
        <div className={classes.cartItem}>
            <div>
                <img src={cartItem.media.smallImageUrl} alt="sneaker image"/>
            </div>
            <div>{cartItem.title.toLowerCase()}</div>
            <div>${cartItem.retailPrice}</div>
        </div>
    )
}


export {CartItem};