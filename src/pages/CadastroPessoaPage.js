import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import FormularioCadastro from '../components/FormularioCadastro';
import FormularioEdicao from '../components/FormularioEdicao';
import ListaPessoas from '../components/ListaPessoas';
import { getPessoas, excluirPessoa } from '../api/pessoaApi';

const CadastroPessoaPage = () => {
  const [pessoas, setPessoas] = useState([]);
  const [nome, setNome] = useState('');
  const [tipoPessoa, setTipoPessoa] = useState('');
  const [cpfCnpj, setCpfCnpj] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [estadoCivil, setEstadoCivil] = useState('');
  const [endereco, setEndereco] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [editandoId, setEditandoId] = useState(null);

  useEffect(() => {
    fetchPessoas();
  }, []);

  const navigate = useNavigate();

  const fetchPessoas = async () => {
    try {
      const response = await getPessoas();
      setPessoas(response.pessoas);
    } catch (error) {
      console.error('Erro ao buscar pessoas:', error);
    }
  };

  const handleCadastro = async (e) => {
    e.preventDefault();
    fetchPessoas();
    clearFields();
    setEditandoId(null);
  };

  const handleExclusao = async (pessoaId) => {
    try {
      await excluirPessoa(pessoaId);
      fetchPessoas();
      clearFields();
      setEditandoId(null);
    } catch (error) {
      console.error('Erro ao excluir pessoa:', error);
    }
  };

  const handleEdicao = async (DadosPessoa) => {
    if (DadosPessoa) {
      setNome(DadosPessoa.nome);
      setTipoPessoa(DadosPessoa.tipoPessoa);
      setCpfCnpj(DadosPessoa.cpfCnpj);
      setDataNascimento(DadosPessoa.dataNascimento);
      setEstadoCivil(DadosPessoa.estadoCivil);
      setEndereco(DadosPessoa.endereco);
      setTelefone(DadosPessoa.telefone);
      setEmail(DadosPessoa.em);
      setEditandoId(DadosPessoa.id_pessoa);         
    }
    fetchPessoas();
  };

  const handleCancelEdicao = () => {
    fetchPessoas();
    clearFields();
    setEditandoId(null);
  };

  const clearFields = () => {
    setNome('');
    setTipoPessoa('');
    setCpfCnpj('');
    setDataNascimento('');
    setEstadoCivil('');
    setEndereco('');
    setTelefone('');
    setEmail('');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case 'nome':
        setNome(value);
        break;
      case 'tipoPessoa':
        setTipoPessoa(value);
        break;
      case 'cpfCnpj':
        setCpfCnpj(value);
        break;
      case 'dataNascimento':
        setDataNascimento(value);
        break;
      case 'estadoCivil':
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

  const atualizarPessoas = async () => {
      fetchPessoas();
  };

  return (
    <div className="cadastro-pessoa-container">
      <ArrowBackIcon onClick={() => { navigate('../') }} />
      <h2  className="custom-h2">Cadastro de Pessoa</h2>
      {editandoId ? (
        <FormularioEdicao         
          pessoa={pessoas.find((p) => p.id_pessoa === editandoId)}
          onEditar={handleEdicao}
          onCancel={handleCancelEdicao}
          onChange={handleInputChange}
        />
      ) : (
        <FormularioCadastro
          nome={nome}
          tipoPessoa={tipoPessoa}
          cpfCnpj={cpfCnpj}
          dataNascimento={dataNascimento}
          estadoCivil={estadoCivil}
          endereco={endereco}
          telefone={telefone}
          email={email}
          onChange={handleInputChange}
          onSubmit={handleCadastro}
          isEdicao={false}
          atualizarPessoas={atualizarPessoas}
        />
      )}

      <ListaPessoas pessoas={pessoas} onExcluir={handleExclusao} onEditar={handleEdicao} />
    </div>
  );
};

export default CadastroPessoaPage;
