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
import { Modal } from '../../utils/Modal';

type CartProps = {
    cartList: Array<Product> | undefined;
    getCartList: () => void;
    cleanCartList: () => void,
    deleteCartItem: (id: string) => void;
    totalPrice: number
}

const Cart: React.FC<CartProps & RouteComponentProps> = ({ cartList, getCartList, cleanCartList, deleteCartItem, totalPrice, ...props }) => {
    const theme = useTheme();
    const classes = useStyles(theme)
    const { history } = props;
    const [modalToggle, setModalToggle] = useState<boolean>(false)
    const [isLoaded, setIsLoaded] = useState<boolean>(false)

    useEffect(() => {
        const loadList = async () => {
            await getCartList()
        }
        loadList().then(() => setIsLoaded(true))
    }, [])

    const onCartItemClick = (id: string) => {
        history.push(`/sneaker/${id}`)
    }

    const confirmOrder = () => {
        cleanCartList();
        setModalToggle(false)
    }

    console.log('cartList', cartList);

    const renderCart = (list: Array<Product> | undefined) => {
        return (
            list && list.length > 0 ?
                <div>
                    {
                        list.map(item => {
                            return (
                                <div key={item.id} className={classes.cartListBlock}>
                                    <CartItem cartItem={item} onCartItemClick={onCartItemClick} />
                                    <div className={classes.deleteIcon} onClick={() => deleteCartItem(item.id)}><i className="fas fa-times"></i></div>
                                </div>
                            )
                        })
                    }
                    {
                        <div className={classes.cartBottom}>
                            <h2>Total:</h2>
                            <p>$ {totalPrice}</p>
                            <Button
                                variant={ButtonVariant.PRIMARY}
                                onClick={() => setModalToggle(true)}
                            >
                                <h3>Make order</h3>
                            </Button>
                        </div>


                    }

                    {
                        modalToggle &&
                        <Modal onCloseModal={() => setModalToggle(false)}>
                            <div className={classes.cartModalText}>
                                <div className={classes.cartModalTextTitle}>
                                    <h2>Your total price is</h2>
                                    <h2>$ {totalPrice}.</h2>
                                </div>
                                <p>You want to confirm your order?</p>
                            </div>
                            <div className={classes.cartModalButtons}>
                                <Button
                                    variant={ButtonVariant.PRIMARY}
                                    onClick={confirmOrder}
                                ><h3>Yes</h3></Button>
                                <Button
                                    variant={ButtonVariant.PRIMARY}
                                    onClick={() => setModalToggle(false)}
                                ><h3>No</h3></Button>
                            </div>
                        </ Modal>
                    }
                </div>
                : 
                <div className={classes.emptyCart}>Cart is empty</div>
        )
    }
    return (
        <>
            {
                isLoaded  ? renderCart(cartList) : <Spinner />
            }
        </>
    )
}


export { Cart };