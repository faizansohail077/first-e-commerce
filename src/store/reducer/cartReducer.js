const initialState = {
    products: [],
    totalPrice: 0,
    totalQuantities: 0,

}
const CartReducer = (state = initialState, action) => {
    let findPro;
    let index;
    switch (action.type) {
        case 'ADD_TO_CART':
            const { product, quantity } = action.payload
            console.log(product.id, quantity)

            const check = state.products.find(product1 => product1.id === product.id)
            console.log('check', check)
            console.log('checkcing products', state.products)
            if (check) {
                return state
            }
            else {
                const Tprice = state.totalPrice + product.price * quantity
                const Tqunatities = state.totalQuantities + quantity
                product.quantity = quantity
                return {
                    ...state, products: [...state.products, product], totalPrice: Tprice, totalQuantities: Tqunatities
                }
            }
        case 'INC':
            findPro = state.products.find(product => product.id === action.payload)
            index = state.products.findIndex(product => product.id == action.payload);
            findPro.quantity += 1
            state.products[index] = findPro

            return {
                ...state, totalPrice: state.totalPrice + findPro.totalPrice, totalQuantities: state.totalQuantities + 1
            }

        case 'DEC':
            findPro = state.products.find(product => product.id === action.payload)
            index = state.products.findIndex(product => product.id == action.payload);
            if (findPro.quantity > 1) {
                findPro.quantity -= 1
                state.products[index] = findPro

                return {
                    ...state,
                    totalPrice: state.totalPrice - findPro.totalPrice, totalQuantities: state.totalQuantities - 1
                }
            }
            else {
                return state
            }

        case 'REMOVE':
            findPro = state.products.find(product => product.id === action.payload)
            const filtered = state.products.filter(product => product.id !== action.payload)
            return {
                ...state,
                products: filtered,
                totalPrice: state.totalPrice - findPro.totalPrice * findPro.quantity, totalQuantities: state.totalQuantities - findPro.quantity
            }
        default:
            return state
    }

}
const init = {
    user: null
}

export const loginReducer = (state = init, action) => {
    switch (action.type) {
        case 'LOGIN':
            state.user = action.payload
            break
        case 'LOGOUT':
            state.user = action.payload;
            break

        default:
            return state;
    }


}

export default CartReducer