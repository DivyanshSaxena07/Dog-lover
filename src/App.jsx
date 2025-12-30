import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DogDonation from './components/DogDonation/DogDonation';

// import Profile from './components/Profile/Profile';
import './App.css';

function App() {
  return (
    <Router>
      
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<DogDonation />} />
        {/* <Route path="/product/:id" element={<Profile/>} /> */}
        {/* Add more routes here if needed */}
                {/* <Route path="/product/:id" element={<ProductPage/>} />
                <Route path="/add-address" element={<AddAddressPage/>} />
                <Route path="/order-summary" element={<OrderSummary/>} />
                <Route path="/payment" element={<PaymentPage/>} />
                <Route path="/payment-success" element={<PaymentSuccess/>} /> */}

      </Routes>
    </Router>
  );
}

export default App;
