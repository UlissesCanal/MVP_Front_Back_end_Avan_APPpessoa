import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PessoaPage from './pages/CadastroPessoaPage';
import BuscarEnderecoPage from './pages/BuscarEnderecoPage'; 


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cadastro-pessoa" element={<PessoaPage />} />
        <Route path="/buscar-endereco" element={<BuscarEnderecoPage />} /> 
      </Routes>
    </Router>
  );
};

export default App;
