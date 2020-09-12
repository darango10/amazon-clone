import React from 'react';
import '../css/Product.css'
import {useStateValue} from "../StateProvider";
import {actionTypes} from "../reducer";

const Product = ({id, title, price, image, rating}) => {

    const [{basket}, dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type: actionTypes.ADD_TO_BASKET,
            payload: {
                id, title, image, price, rating
            }
        })
    }

    return (
        <div className='product'>
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p key={i}>{'⭐'}</p>
                        ))}

                </div>
            </div>

            <img
                src={image}
                alt={title}/>

            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    );
};

export default Product;
