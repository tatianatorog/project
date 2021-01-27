import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from '../axios'
import id from './userId'

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

  AppProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };

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
