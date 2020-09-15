import React from 'react';
import '../css/CheckoutProduct.css'
import {useStateValue} from "../StateProvider";
import {actionTypes} from "../reducer";

const CheckoutProduct = ({item,hideButton}) => {

    const [{basket}, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: actionTypes.REMOVE_FROM_BASKET,
            payload: {
                id: item.id
            }
        })
    }

    return (
        <div className='checkoutProduct'>
            <img className='checkoutProduct__image' src={item.image} alt={item.title}/>
            <div className="checkoutProduct__info">
                <p className='checkoutProduct__title'>{item.title}</p>
                <p className='checkoutProduct__price'>
                    <small>$</small>
                    <strong>{item.price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(item.rating)
                        .fill()
                        .map((_, i) => (
                            <p key={i}>{'⭐'}</p>
                        ))}
                </div>
                {!hideButton && <button onClick={removeFromBasket}>Remove from Basket</button>}


            </div>
        </div>
    );
};

export default CheckoutProduct;
