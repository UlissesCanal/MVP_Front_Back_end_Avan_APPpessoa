import React, { useState } from 'react';
import { buscarCep } from '../api/pessoaApi';

const BuscarEnderecoPage = () => {
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState(null);
  const [error, setError] = useState('');

  const handleBuscarClick = async () => {
    try {
      const response = await buscarCep(cep); // Use a função buscarCep do seu arquivo de API
      setEndereco(response);
      setError('');
    } catch (err) {
      setError('Erro ao buscar endereço. Verifique o CEP e tente novamente.');
      setEndereco(null);
    }
  };

  return (
    <div>
      <h2>Buscar Endereço</h2>
      <input type="text" value={cep} onChange={(e) => setCep(e.target.value)} placeholder="Digite o CEP" />
      <button onClick={handleBuscarClick}>Buscar</button>
      {error && <p>{error}</p>}
      {endereco && (
        <div>
          <p>CEP: {endereco.cep}</p>
          <p>Logradouro: {endereco.logradouro}</p>
          <p>Complemento: {endereco.complemento}</p>
          <p>Bairro: {endereco.bairro}</p>
          <p>Localidade: {endereco.localidade}</p>
          <p>UF: {endereco.uf}</p>
          <p>IBGE: {endereco.ibge}</p>
          <p>GIA: {endereco.gia}</p>
          <p>DDD: {endereco.ddd}</p>
          <p>SIAFI: {endereco.siafi}</p>
        </div>
      )}
    </div>
  );
};

export default BuscarEnderecoPage;
