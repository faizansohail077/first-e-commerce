const initialState = {
    products: [],
    totalPrice: 0,
    user: null,
    totalQuantities: 0,
    product: [],
    cartItem: []

}

const CartReducer = (state = initialState, action) => {
    let findPro;
    let index;
    switch (action.type) {
        case 'ADD_TO_CART':
            const { product, quantity } = action.payload
            console.log('this is product in ', product)
            console.log('this is product in ', product.productId)
            console.log('this is product in ', product.id)
            const cart = state.cartItem.find(product1 => product1.productId == product.id)
            console.log('this is check', cart)
            if (cart) {
                return state
            }
            else {
                const Tprice = state.totalPrice + product.price * quantity
                const Tqunatities = state.totalQuantities + quantity
                product.quantity = quantity
                return {
                    // ...state, cartItem: [...state.cartItem, product], totalPrice: Tprice, totalQuantities: Tqunatities
                    ...state, cartItem: [...state.cartItem, product], totalPrice: Tprice, totalQuantities: Tqunatities
                }
            }

        case 'GET__PRODUCTS':
            return {
                ...state,
                products: action.payload
            }

        case 'GET__PRODUCT':
            return {
                ...state,
                product: action.payload
            }


        case 'PRODUCT':
            let index1 = state.products.findIndex(product => product.productId === action.id)
            console.log('this is index', index1)
            return { ...state, product: state.products[index] }

        case 'INC':
            findPro = state.cartItem.find(product => product.id === action.payload)
            index = state.cartItem.findIndex(product => product.id == action.payload);
            findPro.quantity += 1
            state.cartItem[index] = findPro
            return {
                ...state, totalPrice: state.totalPrice + findPro.totalPrice, totalQuantities: state.totalQuantities + 1
            }


        case 'DEC':
            findPro = state.cartItem.find(product => product.id === action.payload)
            index = state.cartItem.findIndex(product => product.id == action.payload);
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
            findPro = state.cartItem.find(product => product.id === action.payload)
            console.log('this is findPro', findPro)
            const filtered = state.cartItem.filter(product => product.id !== action.payload)
            return {
                ...state,
                cartItem: filtered,
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
                cartItem: [],
                totalQuantities: 0
            }
        default:
            return state
    }

}


export default CartReducer