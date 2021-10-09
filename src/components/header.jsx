import React from 'react';
import { FaSearch, FaBars } from 'react-icons/fa';
import * as S from '../styles/components/header';

const Header = () => (
  <S.Header>
    <FaBars icon="fa-solid fa-bars" />
    <FaSearch icon="fa-solid fa-search" />
  </S.Header>
);

export default Header;
