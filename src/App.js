import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Header } from './components/Header';
import { LocalesPage } from './pages/Locales';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main className="container">
          <Routes>
            <Route path="/" element={<div />} />
            <Route path="/locales" element={<LocalesPage />} />
            <Route path="/promo" element={<div />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
