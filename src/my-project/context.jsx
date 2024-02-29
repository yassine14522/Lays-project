// UserContext.js
import React, { createContext, useContext, useReducer } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const initialState = {
    user: '',
    email: '',
    password: '',
    usersList: [],
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'input':
        return { ...state, [action.field]: action.payload };
      case 'reset':
        return initialState;
      case 'addUser':
        return { ...state, usersList: [...state.usersList, action.payload] };
        case 'addCard':
        return { ...state, usersList: [...state.usersList, action.payload] };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
