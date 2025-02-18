import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Farming from './components/Farming';
import { ConfigProvider, theme } from 'antd';

const App = () => {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
        token: {
          colorPrimary: '#2851E3',
        },
      }}
    >
      <Router>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/farming" element={<Farming />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </Router>
    </ConfigProvider>
  );
};

export default App; 