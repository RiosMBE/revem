import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './ui/pages/Home';

import Header from './ui/components/Header';
import Footer from './ui/components/Footer';

function App() {
  return (
    <>
      <Router>
        <Header />
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App;
