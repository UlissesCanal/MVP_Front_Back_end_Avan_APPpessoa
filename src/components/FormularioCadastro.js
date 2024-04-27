import React, { useState } from 'react';
import { TextField, Select, MenuItem } from '@mui/material';
import '../styles/formulario.css';
import { cadastrarPessoa } from '../api/pessoaApi';

const FormularioCadastro = ({  onSubmit, onCancel, onChange,atualizarPessoas }) => {
  const [pessoa, setPessoa] = useState({
    pessoa_id: '',
    nome: '',
    tipo_pessoa: '',
    cpf_cnpj: '',
    data_nascimento: '',
    estado_civil: '',
    endereco: '',
    telefone: '',
    email: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPessoa((prevPessoa) => ({
      ...prevPessoa,
      [name]: value,
    }));
  };

  const handleCadastro = async (event) => {
    event.preventDefault();
    try {
      await cadastrarPessoa(pessoa);
      // Limpar campos após o cadastro
      setPessoa({
        pessoa_id: '',
        nome: '',
        tipo_pessoa: '',
        cpf_cnpj: '',
        data_nascimento: '',
        estado_civil: '',
        endereco: '',
        telefone: '',
        email: '',
      });
      // Atualizar a lista de pessoas
      atualizarPessoas();

      alert('Pessoa cadastrada com sucesso!');
    } catch (error) {
      console.error('Erro ao cadastrar pessoa:', error);
      alert('Erro ao cadastrar pessoa. Por favor, tente novamente.');
    }
    
  };
  

  return (
    <form onSubmit={handleCadastro} className="formulario-container">
      <div>
        <TextField
          label="Nome"
          name="nome"
          value={pessoa.nome}
          onChange={handleChange}
          fullWidth
        />
      </div>

      <div>
        <Select
          label="Tipo de Pessoa"
          name="tipo_pessoa"
          value={pessoa.tipo_pessoa}
          onChange={handleChange}
          fullWidth
        >
          <MenuItem value="Física">Física</MenuItem>
          <MenuItem value="Jurídica">Jurídica</MenuItem>
        </Select>
      </div>

      <div>
        <TextField
          label="CPF/CNPJ"
          name="cpf_cnpj"
          value={pessoa.cpf_cnpj}
          onChange={handleChange}
          fullWidth
        />
      </div>

      <div>
        <TextField
          label="Data de Nascimento"
          name="data_nascimento"
          type="date"
          value={pessoa.data_nascimento}
          onChange={handleChange}
          fullWidth
        />
      </div>

      <div>
        <Select
          label="Estado Civil"
          name="estado_civil"
          value={pessoa.estado_civil}
          onChange={handleChange}
          fullWidth
        >
          <MenuItem value="Solteiro(a)">Solteiro(a)</MenuItem>
          <MenuItem value="Casado(a)">Casado(a)</MenuItem>
          <MenuItem value="Divorciado(a)">Divorciado(a)</MenuItem>
          <MenuItem value="Viúvo(a)">Viúvo(a)</MenuItem>
        </Select>
      </div>

      <div>
        <TextField
          label="Endereço"
          name="endereco"
          value={pessoa.endereco}
          onChange={handleChange}
          fullWidth
        />
      </div>

      <div>
        <TextField
          label="Telefone"
          name="telefone"
          value={pessoa.telefone}
          onChange={handleChange}
          fullWidth
        />
      </div>

      <div>
        <TextField
          label="Email"
          name="email"
          value={pessoa.email}
          onChange={handleChange}
          fullWidth
        />
      </div>

      <button type="submit">Cadastrar</button>
    </form>
  );
};

export default FormularioCadastro;
