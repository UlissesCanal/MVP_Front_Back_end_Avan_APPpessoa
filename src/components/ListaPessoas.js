import React from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

const ListaPessoas = ({ pessoas, onExcluir, onEditar }) => {


  const getRowId = (row) => row.id_pessoa; // Utiliza a propriedade id_pessoa como o id da linha

  const columns = [
    { field: 'id_pessoa', headerName: 'Código', width: 100 },
    { field: 'nome', headerName: 'Nome', width: 200 },
    { field: 'tipo_pessoa', headerName: 'Tipo de Pessoa', width: 200 },
    { field: 'cpf_cnpj', headerName: 'CPF/CNPJ', width: 200 },
    { field: 'data_nascimento', headerName: 'Data de Nascimento', width: 200 },
    { field: 'estado_civil', headerName: 'Estado Civil', width: 200 },
    { field: 'endereco', headerName: 'Endereço', width: 200 },
    { field: 'telefone', headerName: 'Telefone', width: 200 },
    { field: 'email', headerName: 'E-Mail', width: 200 },
    {
      field: 'acoes',
      headerName: 'Ações',
      width: 150,
      renderCell: (params) => (
        <>
          <button onClick={() => onEditar(params.row)}>Editar</button>
          <button onClick={() => onExcluir(params.row.id_pessoa)}>Excluir</button>        
        </>
      ),
    },
  ];

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={pessoas}
        columns={columns}
        components={{
          Toolbar: GridToolbar,
        }}
        getRowId={getRowId} // Define a função getRowId para obter o id da linha
      />
    </div>
  );
};

export default ListaPessoas;
