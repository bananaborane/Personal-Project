import axios from 'axios';

const initState = {
    isUserLoggedIn: false,
    id: '',
    email: '',
    password: '',
    username: '',
    loading: true,
    theProduct: {},
    inquire: false,
    listOfDirectMessages: [],
    message: '',
    roomId: 0
};

const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";
const REGISTER = "REGISTER";
const REDUX_HANDLE_CHANGE = "REDUX_HANDLE_CHANGE";
const INQUIRE_ON_BIKE = "INQUIRE_ON_BIKE";
const HOLD_ROOM_ID = "HOLD_ROOM_ID";
const UPDATE_DIRECT_MESSAGES = "UPDATE_DIRECT_MESSAGES";
const UPDATE_IS_USER_LOGGED_IN = "UPDATE_IS_USER_LOGGED_IN";

export const updateIsUserLoggedIn = (data)=>{
  return {
    type: UPDATE_IS_USER_LOGGED_IN,
    payload: data
  }
}

export const updateListOfDirectMessages =(data)=>{
  return {
    type: UPDATE_DIRECT_MESSAGES,
    payload: data
  }
}

export const inquireOnBike = ()=>{
  return {
    type: INQUIRE_ON_BIKE,
    payload: true
  }
}

export const holdRoomId = (roomId) => {
  return {
    type: HOLD_ROOM_ID,
    payload: roomId
  }
}


export const login = (email, password) => {
  let data = axios.post('/auth/login', { email, password })
  .then(res => {
    console.log(res.data);  
    return res.data})
  .catch(err=>console.log(`Something happened while logging in through Redux: ${err}`))
  console.log(data)
  return {
    type: LOGIN,
    payload: data
  }
}

export const logout = () => {
  return {
    type: LOGOUT
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
      let { email, username, id } = action.payload.userData;
      return { ...state, email, password: '', username, id, loading: false, isUserLoggedIn: true }
    case LOGIN + '_REJECTED':
        return {...state, loading: false}
    case REGISTER + '_PENDING':
      return { ...state, loading: true }
    case REGISTER + '_FULFILLED':
        console.log(state)
        return { ...state, email: action.payload.userData.email, id:action.payload.userData.id, password: '', username: action.payload.userData.username, loading: false , isUserLoggedIn: true }
    case REGISTER + '_REJECTED':
      return {...state, loading: false}
    case REDUX_HANDLE_CHANGE:
      console.log(state)
      return { ...state, [action.payload.name]: action.payload.value }
    case LOGOUT:
      return {...state, isUserLoggedIn: false, inquire: false}
    case INQUIRE_ON_BIKE:
      return {...state, inquire: action.payload}
    case HOLD_ROOM_ID:
      return {...state, roomId: action.payload}
    case UPDATE_DIRECT_MESSAGES:
      return {...state, listOfDirectMessages: [...state.listOfDirectMessages, action.payload]}
    case UPDATE_IS_USER_LOGGED_IN:
      return {...state, isUserLoggedIn: true, id: action.payload.id, email: action.payload.email, username: action.payload.username}
    default:
      return state;
  }
}


