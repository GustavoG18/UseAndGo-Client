import styled from 'styled-components';

type Props = {
  url: string;
  title: string;
  type: string;
  description: string;
}

const CircleCard = ({url, title, type, description}: Props) => {
  const Container = styled.div`
    width: 204px;
    &:hover {
      color: red;
    }
  `
  const CircleContainer = styled.div`
    width: 204px;
    height: 204px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 0.5px grey solid;
    border-radius: 100px;
    overflow: hidden;
  `
  const DefaultContainer = styled.div`
    width: 204px;
    height: 204px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 0.5px grey solid;
    overflow: hidden;
  `
  const Image = styled.img`
    width: 204px;
    height: 204px;
    border-radius: 100px;
    &:hover {
      transform: scale(1.3);
      transition: transform 0.5s ease;
    }
  `
  const Title = styled.h3`
    font-family: 'Taviraj', serif;
    font-weight: 500;
    font-size: 20px;
    text-align: center;
    margin-top: 10px;
    margin-bottom: 5px;
  `
  const Description = styled.p`
    font-family: 'Taviraj', serif;
    font-weight: 300;
    font-size: 15px;
    text-align: center;
    margin-top: 0;
  `
  return(
    <>
      <Container>
        {type === 'Circle' && 
          <CircleContainer>
            <Image src={url} alt=""/>
          </CircleContainer>
        }
        {type === 'Default' && 
          <DefaultContainer>
            <Image src={url} alt=""/>
          </DefaultContainer>
        }
        <Title>{title}</Title>
        {description !== '' && <Description>{description}</Description>}
      </Container>
    </>
  );
};

export default CircleCard;