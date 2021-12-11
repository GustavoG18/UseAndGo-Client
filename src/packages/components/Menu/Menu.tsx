import styled from 'styled-components';
import logo from '../../assets/logo.png';
import cart from '../../assets/cart.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Menu = () => {

  const [selected, setSelected] = useState(0);

  const Menu = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    height: 100px;
    margin-left: auto;
    margin-right: auto;
    font-family: 'Taviraj', serif;
    font-weight: 700;
  `
  const List = styled.ul`
    display: flex;
    flex-direction: row;
    width: auto;
    max-width: 100%;
    margin-right: 60px;
  `

  const Option = styled.li`
    list-style: none;
    margin: 20px;
    font-size: 18px;
  `

  const Button = styled.button`
    margin-right: 5px;
    background: none;
    border: none;
    font-size: 15px;
  `

  const ButtonContainer = styled.div`
    width: auto;
    display: flex;
    flex-direction: row;
  `
  
  return(
    <>
      <Menu>
        <img width="150px" height="50px" src={logo} alt="Logo USEANDGO"/>
        <List>
          <Option onClick={() => {
            setSelected(0)
          }}>
            <Link to="/" style={{textDecoration: 'none', color: selected === 0? 'red':'black'}}>All Products</Link>
          </Option>
          <Option onClick={() => {
            setSelected(1)
          }}>
            <Link to="/ArmyCaps" style={{textDecoration: 'none', color: selected === 1? 'red':'black'}}>Army Caps</Link>
          </Option>
          <Option 
            onClick={() => {
              setSelected(2)
            }}
          >
            <Link to="/BaseballCaps" style={{textDecoration: 'none', color: selected === 2? 'red':'black'}}>Baseball Caps</Link>
          </Option>
          <Option onClick={() => {
            setSelected(3)
          }}>
            <Link to="/Berets" style={{textDecoration: 'none', color: selected === 3? 'red':'black'}}>Berets</Link>
          </Option>
        </List>
        <ButtonContainer>
          <Button style={{fontFamily: 'Taviraj', color: 'black', fontWeight: '700'}}>Login</Button>
          <img style={{marginRight: '20px'}} width="25px" height="25px" src={cart} alt="cart"/>
        </ButtonContainer>
      </Menu>
    </>
  )
};

export default Menu;