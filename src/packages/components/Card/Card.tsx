import styled from 'styled-components';
import { Hat } from '../../common-types/schemas-types';
import starFill from '../../assets/star.png';
import starHalf from '../../assets/starHalf.png';
import starFilled from '../../assets/starFilled.png';
import add from '../../assets/add.png';
import {v4 as uuidv4} from 'uuid';



type Props = {
  hat: Hat;
}

const Card = ({hat}: Props) => {
  const {
    id,
    images,
    tags,
    title,
    price,
    comments 
  } = hat;

  const Badge = styled.div`
    position: absolute;
    width: auto;
    padding: 1px 8px 1px 8px;
    height: 20px;
    background: rgb(229,229,229);
  `
  const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 569px;
    width: 360px;
    margin: 20px auto;
    border: 0.5px grey solid;
  `
  const SecondContainer = styled.div`
    margin: 20px;
    border-top: 0.5px grey solid;
  `
  const Title = styled.h1`
    font-size: 1.125rem;
    line-height: 1.333333;
  `
  const Price = styled.span`
    font-weight: 300;
  `
  const StarContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
  `
  const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
    height: 60px;
    border-top: 0.5px grey solid;
  `

  const mouseOver = (id: string) => {
    document.getElementById(id)?.setAttribute('src', images[1].url);
  }

  const mouseOut = (id: string) => {
    document.getElementById(id)?.setAttribute('src', images[0].url);
  }

  const stars = () => {
    let average = comments.map(
      ({reviews}) => Number(reviews)).reduce(
        (reviewsA,reviewsB) => reviewsA + reviewsB)/comments.length;
    return comments.map((_,index) => {
      if(index < Math.floor(average)){
        return <img key={uuidv4()} width="24px" height="24px" src={starFill} alt="start fill"/>;
      }else if(average % 1 >= 0.5){
        average = Math.floor(average);
        return <img key={uuidv4()} width="24px" height="24px" src={starHalf} alt="start fill"/>
      } 
      return <img key={uuidv4()} width="20px" height="20px" src={starFilled} alt="start fill"/>
    });
  }

  return (
    <>
      <CardContainer>
        <Badge>{tags}</Badge>
        <img 
          id={`${id}Image`} 
          width="360px"
          height="358px" 
          src={images[0].url} 
          onMouseOver={() => {mouseOver(`${id}Image`)}} 
          onMouseOut={() => {mouseOut(`${id}Image`)}} 
          alt=""
        />
        <SecondContainer>
          <Title>{title}</Title>
          <Price>{price}</Price>
          <StarContainer>
            {stars()}
            <p style={{marginBottom: '10px', marginLeft: '5px'}}>{`(${comments.length} reviews)`}</p>
          </StarContainer>
        </SecondContainer>
        <ButtonContainer>
          <img width="24px" height="24px" src={add} alt="Add icon" />
          Add To Cart
        </ButtonContainer>
      </CardContainer>
    </>
  );
};

export default Card;