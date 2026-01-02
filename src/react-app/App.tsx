
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

// Import or define your page components
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

function App() {
  return (
    <AuthProvider>
      <div className="app-container">
        {/* Route Configuration */}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />

          {/* Protected Routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Home />} />
          </Route>

          {/* Fallback can be Home or Login for now since NotFound is missing */}
          <Route path="*" element={<Login />} />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
