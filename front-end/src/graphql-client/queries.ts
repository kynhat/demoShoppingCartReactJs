import { gql } from '@apollo/client';

const getAllDataFromBE = gql`
query getAllDataFromBE {
  products {
    title
    amount
    id
    price
    title
    category
    description
    image
  }
}`;

const CartCheckout =  gql`
mutation checkout {
  checkout {
    title
    amount
    id
    price
    title
    category
    description
    image
  }
}`;

export { getAllDataFromBE, CartCheckout }