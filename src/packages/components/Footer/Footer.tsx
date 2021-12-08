import styled from "styled-components";
import Logo from '../../assets/logo.png';
import facebookLogo from '../../assets/facebookLogo.svg';
import instagramLogo from '../../assets/instagramLogo.svg';
import twitterLogo from '../../assets/twitterLogo.svg';
import youtubeLogo from '../../assets/youtubeLogo.svg';

const Footer = () => {
  const Footer = styled.div`
    width: 100%;
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #D33530;
  `
  const MainContainer = styled.div`
    width: 80%;
    height: 45vh;
    display: flex;
    flex-direction: row;
    background: blue;
  `

  return (
    <>
      <Footer>
        <MainContainer>
        <div style={{background: '#D33530',maxWidth: '100%',width: '100%', height: '50vh'}}>
          <div>
            <img style={{background: '#F7F6F4'}} height="40px" src={Logo} alt="Logo use and go"/>
              <div style={{color: '#FFFFFF', marginTop: '50px'}}>
                <p>Get in touch</p>
                <hr style={{color: 'white'}} />
                <p>Phone: +57 322 22 22</p>
                <p>Service center: +57 322 22 22</p>
                <p>Customer service: +57 322 22 22</p>
                <div>
                  <img style={{marginRight: '10px'}} src={facebookLogo} alt="Facebook logo" />
                  <img style={{marginRight: '10px'}} src={instagramLogo} alt="Instagram logo" />
                  <img style={{marginRight: '10px'}} src={twitterLogo} alt="Twitter logo" />
                  <img src={youtubeLogo} alt="Youtube Logo" />
                </div>
              </div>
            </div>
            <p style={{color: 'white', marginLeft: 'auto', marginRight: 'auto'}}>Made with ❤ by Gustavo Guerrero.</p>
          </div>
        </MainContainer>
      </Footer>
    </>
  );
};

export default Footer;