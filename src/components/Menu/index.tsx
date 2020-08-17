import React, { useCallback, useState } from 'react';
import { FaColumns, FaBox, FaUsers, FaUser } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';
import { MdDashboard, MdShoppingBasket, MdMenu } from 'react-icons/md';
import { BsClipboardData } from 'react-icons/bs';

import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
} from 'react-pro-sidebar';
import imageBackground from '../../assets/images/forgot-password-background.jpg';

import 'react-pro-sidebar/dist/css/styles.css';
import './styles.css';

const MenuSideBar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  const handleCollapsed = useCallback(() => {
    setCollapsed(oldState => !oldState);
  }, []);

  return (
    <ProSidebar collapsed={!!collapsed} image={imageBackground}>
      <SidebarHeader>
        <button type="button" className="button-menu" onClick={handleCollapsed}>
          <MdMenu size={28} color="#adadad" />
        </button>
      </SidebarHeader>
      <Menu iconShape="square">
        <MenuItem icon={<FaColumns size={20} />}>Painel</MenuItem>
        <MenuItem icon={<MdDashboard size={20} />}>Dashboard</MenuItem>
        <MenuItem icon={<FaBox size={19} />}>Produtos</MenuItem>
        <SubMenu title="Pedidos" icon={<MdShoppingBasket size={20} />}>
          <MenuItem>Catálogo</MenuItem>
          <MenuItem>Carrinho</MenuItem>
        </SubMenu>
        <MenuItem icon={<FaUsers size={20} />}>Clientes</MenuItem>
        <MenuItem icon={<FaUser />}>Usuários</MenuItem>
        <MenuItem icon={<BsClipboardData size={20} />}>Relatórios</MenuItem>
      </Menu>
      <SidebarFooter>
        <button type="button" className="button-logout">
          <FiLogOut size={20} color="#adadad" />
        </button>
        <span style={{ display: collapsed ? 'none' : 'block' }}>Sair</span>
      </SidebarFooter>
    </ProSidebar>
  );
};

export default MenuSideBar;
