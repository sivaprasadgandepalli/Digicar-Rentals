import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './components/user pages/userDashBoard.js';
import LoginPage from './components/loginPage.js';
import { AuthProvider } from './components/auth.js';
import SignupPage from './components/signUp.js';
import { ToastContainer} from 'react-toastify';
function App() {
  return (
    <>
    <AuthProvider>
      <ToastContainer/>
      <Dashboard/>
    </AuthProvider>
    </>
  );
}

export default App;
