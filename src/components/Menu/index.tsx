import React, { useCallback, useState, memo } from 'react';
import { FaColumns } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';
import { AiOutlineSetting } from 'react-icons/ai';
import { MdDashboard, MdShoppingBasket, MdMenu } from 'react-icons/md';
import { BsClipboardData } from 'react-icons/bs';
import { Link, useLocation } from 'react-router-dom';
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
  const location = useLocation();

  const [collapsed, setCollapsed] = useState(false);

  const handleCollapsed = useCallback(() => {
    setCollapsed(oldState => !oldState);
  }, []);

  const handleGetCurrentPage = useCallback(() => {
    const pathname = location.pathname.split('/');
    return pathname[1];
  }, [location.pathname]);

  return (
    <ProSidebar collapsed={!collapsed}>
      <SidebarHeader>
        <button type="button" className="button-menu" onClick={handleCollapsed}>
          <MdMenu size={28} color="#adadad" />
        </button>
      </SidebarHeader>

      <Menu iconShape="square">
        <MenuItem
          icon={<FaColumns size={24} />}
          active={handleGetCurrentPage() === 'panels'}
        >
          Painel
          <Link to="/panels" />
        </MenuItem>

        <MenuItem
          icon={<MdDashboard size={24} />}
          active={handleGetCurrentPage() === 'dashboard'}
        >
          Dashboard
          <Link to="/dashboard" />
        </MenuItem>

        <MenuItem
          icon={<AiOutlineSetting size={24} />}
          active={handleGetCurrentPage() === 'general'}
        >
          Configurações
          <Link to="/general" />
        </MenuItem>

        <SubMenu
          title="Pedidos"
          icon={<MdShoppingBasket size={24} />}
          className={
            handleGetCurrentPage() === 'cart' ||
            handleGetCurrentPage() === 'catalog'
              ? 'subMenu-active'
              : ''
          }
        >
          <MenuItem>
            Catálogo
            <Link to="/catalog" />
          </MenuItem>
          <MenuItem>
            Carrinho
            <Link to="/cart" />
          </MenuItem>
        </SubMenu>

        <MenuItem
          icon={<BsClipboardData size={24} />}
          active={handleGetCurrentPage() === 'reports'}
        >
          Relatórios
          <Link to="/reports" />
        </MenuItem>
      </Menu>

      <SidebarFooter>
        <button type="button" className="button-logout" onClick={signOut}>
          <FiLogOut size={25} color="#adadad" />
          <span
            className="logout"
            style={{ display: collapsed ? 'block' : 'none' }}
          >
            Sair
          </span>
        </button>
      </SidebarFooter>
    </ProSidebar>
  );
};

export default memo(MenuSideBar);
