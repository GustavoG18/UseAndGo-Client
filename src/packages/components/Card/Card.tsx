import starFill from '../../assets/resources/star.png';
import starHalf from '../../assets/resources/starHalf.png';
import starFilled from '../../assets/resources/starFilled.png';
import add from '../../assets/resources/add.png';
import {v4 as uuidv4} from 'uuid';
import { Hat } from '../../common-types/schemas-types';
import { Container, Flex, Title, Paragraph } from '../../styles/common-styles/styled-elements';
import { Badge, Image, ButtonAddToCar } from './Card.styles';

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

  const mouseOver = (id: string) => {
    document.getElementById(id)?.setAttribute('src', images[1].url);
  }

  const mouseOut = (id: string) => {
    document.getElementById(id)?.setAttribute('src', images[0].url);
  }

  const stars = () => {
    const starsJSX = [];
    const avarege = comments.map(({reviews}) => parseInt(reviews)).reduce((reviewsA, reviewsB) => reviewsA + reviewsB) / comments.length;
    const rest = avarege % 1;
    for (let index = 0; index < 5; index += 1) {
      if(index < Math.floor(avarege)){
        starsJSX.push(<Image key={uuidv4()} height="24px" width="24px" src={starFill} alt="start fill"/>)
      }else if(index === Math.floor(avarege) && rest > 0.4){
        starsJSX.push(<Image key={uuidv4()} height="24px" width="24px" src={starHalf} alt="start half fill"/>)
      }else{
        starsJSX.push(<Image key={uuidv4()} height="20px" width="20px" src={starFilled} alt="start filled"/>)
      }
    }
    return starsJSX;
  }

  return (
    <>
      <Flex
        bg="transparent"
        flexDirection="column"
        height="569px"
        width="360px"
        margin="20px auto"
        border="1px #c6c6c6 solid"
        alignItems="normal"
        justifyContent="flex-start"
        padding="0"
        style={{cursor: 'pointer'}}
      >
        <Badge bg="grey" color="black" style={{marginRight: '1px #c6c6c6 solid', marginBottom: '1px #c6c6c6 solid'}}>{tags}</Badge>
        <Image
          id={`${id}Image`}  
          src={images[0].url} 
          height="358px" 
          width="360px" 
          onMouseOver={() => {mouseOver(`${id}Image`)}} 
          onMouseOut={() => {mouseOut(`${id}Image`)}} 
          alt={`${title} photo`}
        />
        <Container 
          bg='transparent' 
          width="auto" 
          height="auto" 
          margin="20px 20px 10px 20px" 
          padding="0"
          style={{borderTop: '1px #c6c6c6 solid'}}
        >          
          <Title color="black" style={{fontSize: '1.125rem', lineHeight: '1.333333'}}>{title}</Title>
          <Paragraph color="black" style={{fontWeight: '500', fontSize: '17px', marginBottom: '0'}}>{price}</Paragraph>
          <Flex
            bg="transparent"
            flexDirection="row"
            height="auto"
            width="auto"
            margin="0"
            border="none"
            alignItems="center"
            justifyContent="flex-start"
            padding="0"
          >
            {stars()}
            <Paragraph 
              color="black" 
              style={{marginBottom: '10px', marginLeft: '5px', width: 'auto'}}
            >
              {`(${comments.length} reviews)`}
            </Paragraph>
          </Flex>
        </Container>
        <ButtonAddToCar
          bg="transparent"
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
          width="100%"
          height="100px"
          margin="0"
          padding="0"
          style={{
            borderTop: '1px #c6c6c6 solid',
            textAlign: 'center',
            cursor: 'pointer'
          }}
        >
          <Image
            src={add} 
            width="22px" 
            height="22px" 
            alt='Add icon'
            style={{marginRight: '5px'}}
          />
          Add To Cart
        </ButtonAddToCar>
      </Flex>
    </>
  );
};

export default Card;