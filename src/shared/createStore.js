import React, { createContext, useContext } from 'react'
import useApi from './UseApi';

const createStore = (apiFactory, initialState) => {
    const StoreContext = createContext();
  
    const StoreProvider = props => {
      let store = useApi(apiFactory, initialState);
      return (
        <StoreContext.Provider value={store}>
          {props.children}
        </StoreContext.Provider>
      );
    };
  
    let useStore = () => {
      return useContext(StoreContext);
    };
    
    return [StoreProvider, useStore];
  };
  
  export default createStore;