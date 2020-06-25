import React, { useContext } from 'react';
import { AuthContext } from '../../auth/Auth';
import Dashboard from '../dashboard/Dashboard';
import Login from '../login/Login';

const Home = () => {
  const { currentUser } = useContext(AuthContext);

  return currentUser ? <Dashboard /> : <Login />;
};

export default Home;
