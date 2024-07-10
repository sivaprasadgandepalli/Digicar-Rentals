import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './components/user pages/userDashBoard.js';
import LoginPage from './components/loginPage.js';
import { AuthProvider } from './components/auth.js';
import SignupPage from './components/signUp.js';
function App() {
  return (
    <>
    <AuthProvider>
      <Dashboard/>
    </AuthProvider>
    </>
  );
}

export default App;
