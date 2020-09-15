export const initialState = {
    user: null,
    basket: [],
};

export const actionTypes = {
    SET_USER: "SET_USER",
    ADD_TO_BASKET: "ADD_TO_BASKET",
    REMOVE_FROM_BASKET: "REMOVE_FROM_BASKET",
    EMPTY_BASKET: 'EMPTY_BASKET'
}

//SELECTOR
export const getBasketTotal = (basket) => (
    basket?.reduce((amount, item) => item.price + amount, 0)
)

const reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_BASKET:
            return {
                ...state,
                basket: [...state.basket, action.payload]
            }

        case actionTypes.REMOVE_FROM_BASKET:

            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.payload.id
            )

            let newBasket = [...state.basket]

            if (index >= 0) {
                newBasket.splice(index, 1);
            } else {
                console.warn(`Can't remove product(id:${action.payload.id} as its not in basket!`)
            }

            return {
                ...state,
                basket: newBasket
            }

        case actionTypes.SET_USER:
            return {
                ...state,
                user: action.payload,
            }

        case actionTypes.EMPTY_BASKET:
            return {
                ...state,
                basket: []
            }

        default:
            return state
    }
}

export default reducer;