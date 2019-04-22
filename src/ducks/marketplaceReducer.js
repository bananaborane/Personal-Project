import axios from 'axios';

const initState = {
    loading: false,
    listOfBikes: [],
    theBike: {}
};


const DISPLAY_BIKES = 'DISPLAY_BIKES';
const DISPLAY_THE_BIKE = 'DISPLAY_THE_BIKE';
const ADD_BIKE = 'ADD_BIKE';
const REMOVE_BIKE = 'REMOVE_BIKE';

export const displayBikes = ()=>{
    let data = axios.get(`/displaybikes`)
    .then(res => {
      console.log(res.data)
      return res.data
    })
    .catch(err=>console.log(`Something happened while displaying all the bikes from the reducer: ${err}`))
    return {
      type: DISPLAY_BIKES,
      payload: data
    }
}

export const displayTheBike = (id)=>{
    let data = axios.get(`/shop/collections/marketplace/${id}`)  
    .then(res => {
      console.log(res.data);
      return res.data
    })
    .catch(err=>console.log(`Something happened while displaying the product: ${err}`))
    return {
      type: DISPLAY_THE_BIKE,
      payload: data
    }
  }

export const addBike = ()=>{
    return {
        type: ADD_BIKE,
        payload: null
    }
}

export const removeBike = ()=>{
    return {
        type: REMOVE_BIKE,
        payload: null
    }
}



export default function marketplaceReducer(state = initState, action) {
  switch (action.type) {
    case DISPLAY_BIKES + '_PENDING':
        return { ...state, loading: true }
    case DISPLAY_BIKES + '_FULFILLED':
        console.log(action.payload.payload)
        return { ...state, loading: false, listOfBikes: action.payload.payload }
    case DISPLAY_BIKES + '_REJECTED':
        return {...state, loading: false}
    case DISPLAY_THE_BIKE + '_PENDING':
        return { ...state, loading: true }
    case DISPLAY_THE_BIKE + '_FULFILLED':
        console.log(action.payload.payload)
        return { ...state, loading: false, theBike: action.payload.payload[0] }
    case DISPLAY_THE_BIKE + '_REJECTED':
        return {...state, loading: false}
    case ADD_BIKE + '_PENDING':
        return { ...state, loading: true }
    default:
      return state;
  }
}



