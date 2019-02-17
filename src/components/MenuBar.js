import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const MenuBarCon = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 20px;
  color: #ffffff;
  text-transform: uppercase;
`
// const MenuItem = styled.a`
//   padding-left: 30px;
//   text-decoration: none;
//   color: #ffffff;
// `

const MenuBar = () => {
  return (
    <MenuBarCon>
      <NavLink activeClassName="active-page" className="menu-item" to={'/'}>
        Stories
      </NavLink>
      <NavLink activeClassName="active-page" className="menu-item" to={'/submit'}>
        Submit Your Story
      </NavLink>
      <NavLink activeClassName="active-page" className="menu-item" to={'/admin'}>
        Admin
      </NavLink>
    </MenuBarCon>
  )
}

export default MenuBar;