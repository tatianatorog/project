import React, { useState, useEffect } from 'react';
import axios from '../axios'
import id from '../utils/userId'

const AppContext = React.createContext();
const { Provider, Consumer } = AppContext;

export default function AppProvider({ children }) {

const [user, setUser] = useState({});

  useEffect(() => {
    async function fetchData() {
      const requests = await axios.get(id);
      setUser(requests.data.data)
      
    }
    fetchData();
  }, []);

  return (
    <Provider
      value={{
        user,
      }}
    >
      {children}
    </Provider>
  );
}

export { AppProvider, AppContext, Consumer };
