import * as React from 'react';
import { Spinner } from '../../utils/Spinner';
import { useEffect } from 'react';
import { CartItem } from '../CartItem';
import { useTheme } from 'react-jss';
import useStyles from './Cart.styles';
import { Product } from '../../models/Product';

type CartProps = {
    cartList: Array<Product> | undefined;
    getCartList: () => void
}

const Cart: React.FC<CartProps> = ({ cartList, getCartList }) => {
    const theme = useTheme();
    const classes = useStyles(theme)
    
    useEffect(() => {
        getCartList()
    }, [])

    console.log('cartList', cartList);
    return (
        <>
            {
                cartList ?
                    cartList.map(item => {
                        return (
                            <div key={item.id} className={classes.cartListBlock}>
                                <CartItem cartItem={item}/>
                            </div>

                        )
                    })
                    : <Spinner />
            }
        </>
    )
}


export { Cart };