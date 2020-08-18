import React, { useCallback, useState, useEffect } from 'react';
import { FaColumns, FaBox, FaUsers, FaUser } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';
import { MdDashboard, MdShoppingBasket, MdMenu } from 'react-icons/md';
import { BsClipboardData } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
} from 'react-pro-sidebar';

import { useAuth } from '../../hooks/auth';

import 'react-pro-sidebar/dist/css/styles.css';
import './styles.css';

const MenuSideBar: React.FC = () => {
  const { user, signOut } = useAuth();

  const [collapsed, setCollapsed] = useState(false);

  const handleCollapsed = useCallback(() => {
    setCollapsed(oldState => !oldState);
  }, []);

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <ProSidebar collapsed={!!collapsed}>
      <SidebarHeader>
        <button type="button" className="button-menu" onClick={handleCollapsed}>
          <MdMenu size={28} color="#adadad" />
        </button>
      </SidebarHeader>

      <Menu iconShape="square">
        <MenuItem icon={<FaColumns size={24} />}>
          Painel
          <Link to="/panels" />
        </MenuItem>

        <MenuItem icon={<MdDashboard size={24} />}>
          Dashboard
          <Link to="/dashboard" />
        </MenuItem>

        <MenuItem icon={<FaBox size={22} />}>
          Produtos
          <Link to="/products" />
        </MenuItem>

        <SubMenu title="Pedidos" icon={<MdShoppingBasket size={24} />}>
          <MenuItem>
            Catálogo
            <Link to="/catalog" />
          </MenuItem>
          <MenuItem>
            Carrinho
            <Link to="/cart" />
          </MenuItem>
        </SubMenu>

        <MenuItem icon={<FaUsers size={24} />}>
          Clientes
          <Link to="/customers" />
        </MenuItem>

        <MenuItem icon={<FaUser size={24} />}>
          Usuários
          <Link to="/users" />
        </MenuItem>

        <MenuItem icon={<BsClipboardData size={24} />}>
          Relatórios
          <Link to="/reports" />
        </MenuItem>

        <MenuItem
          className="avatar"
          icon={<img src={user.avatar_url} alt="Avatar" />}
        >
          <button type="button">
            <span
              className="perfil"
              style={{
                display: collapsed ? 'none' : 'block',
              }}
            >
              Perfil
            </span>
          </button>
          <Link to="/me" />
        </MenuItem>
      </Menu>

      <SidebarFooter>
        <button type="button" className="button-logout" onClick={signOut}>
          <FiLogOut size={25} color="#adadad" />
          <span
            className="logout"
            style={{ display: collapsed ? 'none' : 'block' }}
          >
            Sair
          </span>
        </button>
      </SidebarFooter>
    </ProSidebar>
  );
};

export default MenuSideBar;
