import React from 'react';
import { NavLink } from 'react-router-dom';
import { MenuList, MenuItem } from '@mui/material';
import logo from '../assets/logo.png';
import '../styles/menu.css';

const Menu = () => {
  return (
    <div className="menu-container">
      <div className="menu-sidebar">
        <h1>Menu</h1>
        <MenuList>
          <MenuItem component={NavLink} to="/cadastro-pessoa" >Cadastro de Pessoa</MenuItem>
          <MenuItem component={NavLink} to="/buscar-endereco">Buscar Endereço</MenuItem>
        </MenuList>
      </div>
      <div className="menu-logo">
        <img src={logo} alt="Logo" />
      </div>
    </div>
  );
};

export default Menu;
