const initialState = {
    products: [],
    totalPrice: 0,
    user: null,
    totalQuantities: 0,

}

const CartReducer = (state = initialState, action) => {
    let findPro;
    let index;
    switch (action.type) {
        case 'ADD_TO_CART':
            const { product, quantity } = action.payload
            console.log('this is product in reduces', product)

            const check = state.products.find(product1 => product1.id === product.id)
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
        case 'LOGIN':
            return {
                ...state,
                user: action.payload
            }
        case 'LOGOUT':
            return {
                ...state,
                user: null
            }
        case 'EMPTY_PRODUCTS':
            return {
                ...state,
                products: [],
                totalQuantities: 0
            }
        default:
            return state
    }

}


export default CartReducer