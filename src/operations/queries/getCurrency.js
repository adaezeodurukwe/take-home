import { gql } from '@apollo/client';

export const GET_CURRENCIES = gql`
  query getCurrency {
    currency
  }
`;


export const GET_CURRENT_CURRENCY = gql`
  query getCurrentCurrency {
    currentCurrency @client
  }
`;