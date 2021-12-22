import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import React from 'react';

export default props => (
  <BrowserRouter>
    <Routes>
      <Route exact={true} path='/' element={<Home />} />
    </Routes>
  </BrowserRouter>
) 