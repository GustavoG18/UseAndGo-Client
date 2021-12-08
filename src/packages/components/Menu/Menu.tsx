import styled from 'styled-components';
import logo from '../../assets/logo.png';
import cart from '../../assets/cart.png';

const Menu = () => {

  const Menu = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    height: 100px;
    margin-left: auto;
    margin-right: auto;
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
        <img width="191px" height="55px" src={logo} alt="Logo USEANDGO"/>
        <List>
          <Option>All Products</Option>
          <Option>Army Caps</Option>
          <Option>Baseball Caps</Option>
          <Option>Berets</Option>
        </List>
        <ButtonContainer>
          <Button>Login</Button>
          <img style={{marginRight: '20px'}} width="32px" height="32px" src={cart} alt="cart"/>
        </ButtonContainer>
      </Menu>
    </>
  )
};

export default Menu;