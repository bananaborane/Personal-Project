import axios from 'axios';

const initState = {
    isUserLoggedIn: false,
    email: '',
    password: '',
    username: '',
    loading: true
};

const DISPLAY_PRODUCTS_BY_TYPE = 'DISPLAY_PRODUCTS_BY_TYPE';
const LOGIN = "LOGIN";
const REGISTER = "REGISTER";
const REDUX_HANDLE_CHANGE = "REDUX_HANDLE_CHANGE";
const DISPLAY_THE_PRODUCT = 'DISPLAY_THE_PRODUCT';



export const login = (email, password) => {
  let data = axios.post('/auth/login', { email, password })
  .then(res => {
    console.log(res.data);  
    return res.data})
  .catch(err=>console.log(`Something happened while logging in through Redux: ${err}`))
  return {
    type: LOGIN,
    payload: data
  }
}


export const register = (email, password, username) => {
    let data = axios.post('/auth/register', {
       email,
       password,
        username
}).then(res => {
    console.log(res.data);
    return res.data})
.catch(err=>console.log(`Something happened while registering through redux: ${err}`));
  return {
    type: REGISTER,
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

export const reduxHandleChange = (e) => {
    console.log(initState)
    return {
        type: REDUX_HANDLE_CHANGE,
        payload: e.target
    }
}

// axios request is async so the redux middleware will add '_PENDING' when the promise is fulfilled
// when fulfilled, the reducer will be invoked again and action.type will add '_FULFILLED' 

export default function userReducer(state = initState, action) {
  switch (action.type) {
    case LOGIN + '_PENDING':
      return { ...state, loading: true }
    case LOGIN + '_FULFILLED':
      let { email, username } = action.payload.userData;
      return { ...state, email, password: '', username, loading: false, isUserLoggedIn: true }
    case LOGIN + '_REJECTED':
        return {...state, loading: false}
    case REGISTER + '_PENDING':
      return { ...state, loading: true }
    case REGISTER + '_FULFILLED':
        console.log(state)
        return { ...state, email:action.payload.userData.email, password: '', username: action.payload.userData.username, loading: false , isUserLoggedIn: true }
    case REGISTER + '_REJECTED':
      return {...state, loading: false}
    case DISPLAY_THE_PRODUCT + '_PENDING':
      return { ...state, loading: true }
    case DISPLAY_THE_PRODUCT + '_FULFILLED':
        console.log(state)
        return { ...state, loading: false, isUserLoggedIn: true }
    case DISPLAY_THE_PRODUCT + '_REJECTED':
      return {...state, loading: false}
    case REDUX_HANDLE_CHANGE:
      console.log(state)
      return { ...state, [action.payload.name]: action.payload.value }

    default:
      return state;
  }
}


