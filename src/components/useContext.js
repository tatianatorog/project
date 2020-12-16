import React, { useState, useEffect } from 'react';
import axios from '../axios'

const AppContext = React.createContext();
const { Provider, Consumer } = AppContext;

export default function AppProvider({ children }) {

const [user, setUser] = useState({});
const id = "ab80e12e-2e83-417a-a678-b5a7696b757e";
  useEffect(() => {
    async function fetchData() {
      const requests = await axios.get(id);
      // const { user_email, ...all } = requests.data.data;
      // return setUser({ user_email, ...all });
      setUser(requests.data.data)
      
    }
    fetchData();
  }, [id]);

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
