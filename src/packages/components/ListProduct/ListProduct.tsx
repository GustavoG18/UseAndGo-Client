import { useEffect, useState } from 'react';
import axios from 'axios';
import { CategoryProduct } from '../../common-types/schemas-types';
import Card from '../Card/Card';
import styled from 'styled-components';

type Props = {
  category: string;
}

const ListProduct = ({category}: Props) => {
  const CardsContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  `;
  
  const [products, setProducts] = useState<CategoryProduct[]>();
  
  useEffect(() => {
    const request = category === 'Army caps'? 'getAllArmyHats': 
                    category === 'Baseball Caps'? 'getAllBaseballCaps':
                    category === 'Berets'? 'getAllBerets': 'getAllProducts';

    const fetchProducts = () => {
      axios.get('https://useandgo.herokuapp.com/api/' + request).then((response) => {
        setProducts(response.data);
      }).catch((error) => {
        console.error('ERROR => ', error);
      })
    }
    fetchProducts();
  }, []);

  return (
    <>
      {
        products &&
        <h1>{products[0]?.category}</h1>
      }
      {
        products &&
        <CardsContainer>
          {products[0]?.hats?.map((hat) => <Card hat={hat} key={hat.id}/>)}
        </CardsContainer>
      }
    </>
  );
};

export default ListProduct;