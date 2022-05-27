import React from "react";
import Pages from "./pages/Pages";
import Category from "./components/Category";
import Search from "./components/Search";
import styled from 'styled-components'
import {GiKnifeFork} from 'react-icons/gi'
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
    <Nav>
    <GiKnifeFork/>
      <Logo to={'/'}>Delicious App</Logo>
    </Nav>
    <Search/>
    <Category/>
    <Pages/>
    </div>
  );
};

const Logo = styled(Link)`
  text-decoration:none;
  font-size:1.5rem;
  font-weight:400;
  font-family:'Lobster Two', cursive;

`

const Nav = styled.div`
  padding:4rem 0rem;
  display:flex;
  justify-content:flex-start;
  align-items:center;

  svg{
    font-size:2rem
  }
`

export default App;
