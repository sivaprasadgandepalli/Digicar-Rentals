import React from 'react';
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './pages/userDashBoard';
import { AuthProvider } from './components/auth.js';
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
