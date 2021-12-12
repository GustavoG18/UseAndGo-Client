import styled from 'styled-components';
import ListProduct from './ListProduct';
import hat from '../assets/resources/hatExample.png';
import lines from '../assets/icons/lines.svg';
import CircleCard from './CircleCard';

const LandingPage = () => {
  const MainContainer = styled.div`
    width: 80%;
    margin-left: auto;
    margin-right: auto;
  `
  const FirstContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 70vh;
    margin: 50px auto 60px auto;
    background: #F1D5C9;
    font-family: 'Taviraj', serif;
  `
  const SecondContainer = styled.div`
    width: 100%;
    height: 40vh;
  `
  const Button = styled.button`
    width: 200px;
    height: 50px;
    background: #e95c58;
    border: 0.5px red solid;
    border-radius: 10px;
    font-family: 'Taviraj', serif;
    font-weight: 700;
    font-size: 15px;
    margin-top: 20px;
    color: white;
  `

  return (
    <>
      <MainContainer>
        <FirstContainer>
          <img src={hat} alt=""/>
          <img style={{position: 'absolute', right: '0', top: '100px'}} src={lines} alt=""/>
          <div style={{display: 'flex', flexDirection: 'column', width: '40%', marginLeft: '50px'}}>
            <h1 style={{fontFamily: 'Taviraj, serif'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h1>
            <h3 style={{fontFamily: 'Taviraj, serif'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta numquam neque at voluptas ab saepe accusamus tenetur, itaque eaque nobis sit exercitationem recusandae aut officia, minus voluptate minima quod obcaecati.</h3>
            <Button>View more</Button>
          </div>
        </FirstContainer>
        <SecondContainer>
          <h2 style={{fontFamily: 'Taviraj, serif', fontWeight: '900'}}>Shop By Occasion</h2>
          <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', margin: '10px 100px 10px 100px'}}>
            <CircleCard type={'Circle'} title={'Army Caps'} description={''} url={'https://www.kangol.com/media/catalog/product/9/7/9720bc-kangol-cotton-twill-army-cap-silver-1k_3.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=600&width=600&canvas=600:600'} />
            <CircleCard type={'Circle'} title={'Baseball Caps'} description={''} url={'https://www.kangol.com/media/catalog/product/k/4/k4360-kangol-tie-dye-baseball-golden-palm-1k_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=600&width=600&canvas=600:600'} />
            <CircleCard type={'Circle'} title={'Berets'} description={''} url={'https://www.kangol.com/media/catalog/product/k/3/k3408_bk001_maink_4.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=600&width=600&canvas=600:600'} />
          </div>
        </SecondContainer>
        <SecondContainer>
          <h2 style={{fontFamily: 'Taviraj, serif', fontWeight: '900', marginTop: '50px'}}>Shop Our Products</h2>
          <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', margin: '10px 100px 10px 100px'}}>
            <CircleCard type={'Default'} title={'Army Caps'} description={'Caps for all kinds of occasions.'} url={'https://www.kangol.com/media/catalog/product/9/7/9720bc-kangol-cotton-twill-army-cap-silver-1k_3.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=600&width=600&canvas=600:600'} />
            <CircleCard type={'Default'} title={'Baseball Caps'} description={'Caps for all kinds of occasions.'} url={'https://www.kangol.com/media/catalog/product/k/4/k4360-kangol-tie-dye-baseball-golden-palm-1k_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=600&width=600&canvas=600:600'} />
            <CircleCard type={'Default'} title={'Berets'} description={'Caps for all kinds of occasions.'} url={'https://www.kangol.com/media/catalog/product/k/3/k3408_bk001_maink_4.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=600&width=600&canvas=600:600'} />
          </div>
        </SecondContainer>
        <div style={{marginTop: '80px'}}>
          <ListProduct category={'All products'}/>
        </div>
      </MainContainer>
    </>
  );
};

export default LandingPage;