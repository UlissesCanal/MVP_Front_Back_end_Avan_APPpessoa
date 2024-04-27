import React, { useState, useEffect } from 'react';
import { TextField, Select, MenuItem } from '@mui/material';
import '../styles/formulario.css';
import {atualizarPessoa} from '../api/pessoaApi';

const FormularioEdicao = ({ pessoa, onEditar, onCancel, onChange }) => {
  const [pessoa_id, setPessoaId] = useState('');
  const [nome, setNome] = useState('');
  const [tipoPessoa, setTipoPessoa] = useState('');
  const [cpfCnpj, setCpfCnpj] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [estadoCivil, setEstadoCivil] = useState('');
  const [endereco, setEndereco] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (pessoa) {
      setPessoaId(pessoa.pessoa_id);
      setNome(pessoa.nome);
      setTipoPessoa(pessoa.tipo_pessoa);
      setCpfCnpj(pessoa.cpf_cnpj);
      setDataNascimento(pessoa.data_nascimento);
      setEstadoCivil(pessoa.estado_civil);
      setEndereco(pessoa.endereco);
      setTelefone(pessoa.telefone);
      setEmail(pessoa.email);
    }
  }, [pessoa]);

  const handleChange = (event) => {

    const { name, value } = event.target;
    switch (name) {
      case 'nome':
        setNome(value);
        break;
      case 'tipo_pessoa':
        setTipoPessoa(value);
        break;
      case 'cpf_cnpj':
        setCpfCnpj(value);
        break;
      case 'data_nascimento':
        setDataNascimento(value);
        break;
      case 'estado_civil':
        setEstadoCivil(value);
        break;
      case 'endereco':
        setEndereco(value);
        break;
      case 'telefone':
        setTelefone(value);
        break;
      case 'email':
        setEmail(value);
        break;
      default:
        break;
    }
  };

  const handleSalvar = async () => {    
    const pessoaAtualizada = {
      ...pessoa,
      pessoa_id,
      nome,
      tipo_pessoa: tipoPessoa,
      cpf_cnpj: cpfCnpj,
      data_nascimento: dataNascimento,
      estado_civil: estadoCivil,
      endereco,
      telefone,
      email,
    };
    try {
      await atualizarPessoa(pessoaAtualizada);
    } catch (error) {
      console.error('Erro ao Atualizar a pessoa:', error);
    }
    onEditar();
    onCancel();
  };

  const handleCancelar = () => {
    onCancel();
  };

  return (
    <form onSubmit={handleSalvar} className="formulario-container">
      <div>
        <TextField
          label="Nome"
          name="nome"
          value={nome}
          onChange={handleChange}
          fullWidth
        />
      </div>

      <div>
        <Select
          label="Tipo de Pessoa"
          name="tipo_pessoa"
          value={tipoPessoa}
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
          value={cpfCnpj}
          onChange={handleChange}
          fullWidth
        />
      </div>

      <div>
        <TextField
          label="Data de Nascimento"
          name="data_nascimento"
          type="date"
          value={dataNascimento}
          onChange={handleChange}
          fullWidth
        />
      </div>

      <div>
        <Select
          label="Estado Civil"
          name="estado_civil"
          value={estadoCivil}
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
          value={endereco}
          onChange={handleChange}
          fullWidth
        />
      </div>

      <div>
        <TextField
          label="Telefone"
          name="telefone"
          value={telefone}
          onChange={handleChange}
          fullWidth
        />
      </div>

      <div>
        <TextField
          label="Email"
          name="email"
          value={email}
          onChange={handleChange}
          fullWidth
        />
      </div>

      <button type="button" onClick={handleSalvar}>Salvar</button>
      <button type="button" onClick={handleCancelar}>Cancelar</button>
    </form>
  );
};

export default FormularioEdicao;
