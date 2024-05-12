import { useReducer, createContext } from 'react';

export const Store = createContext();

const initialState = {
  userInfo: localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null,

  userList: localStorage.getItem('userList')
    ? JSON.parse(localStorage.getItem('userList'))
    : [],
  stage1: localStorage.getItem('stage1')
    ? JSON.parse(localStorage.getItem('stage1'))
    : [],
 

  stages: localStorage.getItem('stages')
    ? JSON.parse(localStorage.getItem('stages'))
    : [],
  isAdmin: localStorage.getItem('isAdmin')
    ? localStorage.getItem('isAdmin')
    : false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'USER_SIGNIN':
      return { ...state, userInfo: action.payload };
    case 'USER_LISTS':
      return { ...state, userList: action.payload };
    case 'STAGE_1':
      return { ...state, stage1: action.payload };
  
    case 'ADMIN':
      return { ...state, isAdmin: action.payload };
    default:
      return state;
  }
};

export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}> {props.children} </Store.Provider>;
}
