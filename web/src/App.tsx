import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import './App.css';

import Header from './components/Header'
import Footer from './components/Footer'

import Routes from './routes'

function App() {
    
  return (
      <div className="container">
          <BrowserRouter>
            <Header />
            <Routes />
            <Footer />
          </BrowserRouter>
      </div>
      

  );
}

export default App;
