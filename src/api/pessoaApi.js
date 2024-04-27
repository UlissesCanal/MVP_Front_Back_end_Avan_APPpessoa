import axios from 'axios';

const API_URL = 'http://127.0.0.1:5000';

export const getPessoas = async () => {
  try {
    const response = await axios.get(`${API_URL}/pessoas`);
    return response.data;
    
  } catch (error) {
    throw new Error('Erro ao obter lista de pessoas');
  }
};

export const cadastrarPessoa = async (pessoa) => {
  try {
    const response = await axios.post(`${API_URL}/pessoa/0`, pessoa);
    return response.data;
  } catch (error) {
    console.error('Erro ao cadastrar pessoa:', error);
    throw error;
  }
};

export const atualizarPessoa = async (pessoa) => {
  try {
    const response = await axios.put(`${API_URL}/pessoa/${pessoa.id_pessoa}`, pessoa);
    return response.data;
  } catch (error) {
    console.error('Erro ao atualizar pessoa:', error);
    throw error;
  }
};

export const excluirPessoa = async (pessoaId) => {
  try {
    await axios.delete(`${API_URL}/pessoa/${pessoaId}`);
  } catch (error) {
    console.error('Erro ao excluir pessoa:', error);
    throw error;
  }
};  

  export const buscarCep = async (cep) => {
    try {
      const response = await axios.get(`${API_URL}/endereco/${cep}`);
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar CEP:', error);
      throw error;
    }
  }; 


