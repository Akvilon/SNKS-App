import * as React from 'react';
import { useTheme } from 'react-jss';
import useStyles from './CartItem.styles';
import { Product } from '../../models/Product';

type CartItemProps = {
    cartItem: Product,
    onCartItemClick: (id: string) => void
}

const CartItem: React.FC<CartItemProps> = ({cartItem, onCartItemClick}) => {
    const theme = useTheme();
    const classes = useStyles(theme)
    
    return (
        <div className={classes.cartItem} onClick={() => onCartItemClick(cartItem.id)}>
            <div>
                <img src={cartItem.media.smallImageUrl} alt="sneaker image"/>
            </div>
            <div>{cartItem.title.toUpperCase()}</div>
            <div>${cartItem.retailPrice}</div>
        </div>
    )
}


export {CartItem};