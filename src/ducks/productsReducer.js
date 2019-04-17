import axios from 'axios';

const initState = {
    listOfProducts : [],
    loading: false
};

// const REQUEST_BUDGET_DATA = 'REQUEST_BUDGET_DATA';
// const ADD_PURCHASE = 'ADD_PURCHASE';
// const REMOVE_PURCHASE = 'REMOVE_PURCHASE'
const DISPLAY_PRODUCTS_BY_TYPE = 'DISPLAY_PRODUCTS_BY_TYPE';

export const requestProducts = (type) => {
  let data = axios.post('/collections', { type: type })
  .then(res => res.data)
  .catch(err=>console.log(`Something happened while requesting products through Redux: ${err}`))
  return {
    type: DISPLAY_PRODUCTS_BY_TYPE,
    payload: data
  }
}


// export const addPurchase = (price, description, category) => {
//     let data = axios.post('/api/budget-data/purchase', {
//         description,
//         price,
//         category
// }).then(res => res.data)
// .catch(err=>console.log(err));
//   return {
//     type: ADD_PURCHASE,
//     payload: data
// }
// }

// export const removePurchase = (id) => {
//     let data = axios.delete(`/api/budget-data/purchase/${id}`)
//     .then(res => res.data)
//     .catch(err=>console.log(err));
//     return {
//         type: REMOVE_PURCHASE,
//         payload: data
//     }
// }

// axios request is async so the redux middleware will add '_PENDING' when the promise is fulfilled
// when fulfilled, the reducer will be invoked again and action.type will add '_FULFILLED' 

export default function productsReducer(state = initState, action) {
  switch (action.type) {
    case DISPLAY_PRODUCTS_BY_TYPE + '_PENDING':
      return { ...state, loading: true }
    case DISPLAY_PRODUCTS_BY_TYPE + '_FULFILLED':
      return { ...state, listOfProducts: action.payload.payload, loading: false }
    case DISPLAY_PRODUCTS_BY_TYPE + '_REJECTED':
        return {...state, loading: false}
    // case ADD_PURCHASE + '_PENDING':
    //   return { ...state, loading: true }
    // case ADD_PURCHASE + '_FULFILLED':
    //   return { ...state, purchases: action.payload, loading: false }
    // case ADD_PURCHASE + '_REJECTED':
    //   return {...state, loading: false}
    // case REMOVE_PURCHASE + '_PENDING':
    //   return { ...state, loading: true };
    // case REMOVE_PURCHASE + '_FULFILLED':
    //   return { ...state, loading: false, purchases: action.payload }
    // case REMOVE_PURCHASE + '_REJECTED':
    //   return {...state, loading: false}
    default:
      return state;
  }
}