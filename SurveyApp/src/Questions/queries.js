import { gql, useQuery } from '@apollo/client'

export const GET_QUESTIONS_QUERY = gql`
query{
  questions{
    id 
    text
  }
}
`;