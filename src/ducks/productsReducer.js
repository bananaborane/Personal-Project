import axios from 'axios';

const initState = {
    listOfProducts : [],
    loading: false,
    theProduct: {},
    theCart: []
};

// const REQUEST_BUDGET_DATA = 'REQUEST_BUDGET_DATA';
// const ADD_PURCHASE = 'ADD_PURCHASE';
// const REMOVE_PURCHASE = 'REMOVE_PURCHASE'
const DISPLAY_PRODUCTS_BY_TYPE = 'DISPLAY_PRODUCTS_BY_TYPE';
const DISPLAY_THE_PRODUCT = 'DISPLAY_THE_PRODUCT';
const ADD_TO_CART = 'ADD_TO_CART';
const DISPLAY_CART = 'DISPLAY_CART';

export const requestProducts = (type) => {
  let data = axios.post('/collections', { type: type })
  .then(res => res.data)
  .catch(err=>console.log(`Something happened while requesting products through Redux: ${err}`))
  return {
    type: DISPLAY_PRODUCTS_BY_TYPE,
    payload: data
  }
}

export const displayTheProduct = (type, id)=>{
  let data = axios.get(`/collections/${type}/${id}`)
  .then(res => {
    console.log(res.data);
    return res.data
  })
  .catch(err=>console.log(`Something happened while displaying the product: ${err}`))
  return {
    type: DISPLAY_THE_PRODUCT,
    payload: data
  }
}

export const displayCart = (id, cartId)=>{
  let data = axios.post(`/displaycart`, { id, cartId })
  .then(res => {
    console.log('hi')
    return res.data
  })
  .catch(err=>console.log(`Something happened while displaying the product: ${err}`))
  return {
    type: DISPLAY_CART,
    payload: data
  }
}

export const addToCart = (id, qty, size = 'One Size Only') => {
  let data;
  console.log(id, qty, size)
  axios.post('/collections/addtocart', { 
      id: id,
      qty: qty,
      size: size
   })
  .then(res => {
    data = res.data
    console.log(res)
  })
  .catch(err=>console.log(`Something happened while adding a product to cart through Redux: ${err}`))
  return {
    type: ADD_TO_CART,
    payload: data
  }
}


export default function productsReducer(state = initState, action) {
  switch (action.type) {
    case DISPLAY_PRODUCTS_BY_TYPE + '_PENDING':
      return { ...state, loading: true }
    case DISPLAY_PRODUCTS_BY_TYPE + '_FULFILLED':
      return { ...state, listOfProducts: action.payload.payload, loading: false }
    case DISPLAY_PRODUCTS_BY_TYPE + '_REJECTED':
        return {...state, loading: false}
    case DISPLAY_THE_PRODUCT + '_PENDING':
        return { ...state, loading: true }
    case DISPLAY_THE_PRODUCT + '_FULFILLED':
        console.log(action.payload.payload[0])
        return { ...state, loading: false, theProduct: action.payload.payload[0] }
    case DISPLAY_THE_PRODUCT + '_REJECTED':
        return {...state, loading: false}
        case ADD_TO_CART + '_PENDING':
        return { ...state, loading: true }
    case ADD_TO_CART + '_FULFILLED':
        console.log(action.payload.payload)
        return { ...state, loading: false, theCart: action.payload.payload }
    case ADD_TO_CART + '_REJECTED':
        return {...state, loading: false}
    case DISPLAY_CART + '_PENDING':
        return { ...state, loading: true }
    case DISPLAY_CART + '_FULFILLED':
        console.log(action.payload)
        return { ...state, theCart: action.payload.payload, loading: false}
    case DISPLAY_CART + '_REJECTED':
        return {...state, loading: false}
    default:
      return state;
  }
}