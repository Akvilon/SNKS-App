import * as React from 'react';
import { Spinner } from '../../utils/Spinner';
import { useEffect, useState } from 'react';
import { CartItem } from '../CartItem';
import { useTheme } from 'react-jss';
import useStyles from './Cart.styles';
import { Product } from '../../models/Product';
import { RouteComponentProps } from 'react-router';
import { ButtonVariant } from '../../utils/Button/Button.styles';
import { Button } from '../../utils/Button';

type CartProps = {
    cartList: Array<Product> | undefined;
    getCartList: () => void;
    deleteCartItem: (id: string) => void;
    totalPrice: number
}

const Cart: React.FC<CartProps & RouteComponentProps> = ({ cartList, getCartList, deleteCartItem, totalPrice, ...props }) => {
    const theme = useTheme();
    const classes = useStyles(theme)
    const { history } = props;

    useEffect(() => {
        getCartList()
    }, [])

    const onCartItemClick = (id: string) => {
        history.push(`/sneaker/${id}`)
    }

    console.log('cartList', cartList);
    return (
        <>
            {
                cartList ?
                    cartList.map(item => {
                        return (
                            <div key={item.id} className={classes.cartListBlock}>
                                <CartItem cartItem={item} onCartItemClick={onCartItemClick} />
                                <div className={classes.deleteIcon} onClick={() => deleteCartItem(item.id)}><i className="fas fa-times"></i></div>
                            </div>
                        )
                    })
                    : <Spinner />
            }
            {
                cartList && 
                <div className={classes.cartBottom}>
                    <h2>Total:</h2>
                    <p>$ {totalPrice}</p>
                    <Button variant={ButtonVariant.PRIMARY}>
                        <h3>Make order</h3>
                    </Button>
                </div>
            }
        </>
    )
}


export { Cart };