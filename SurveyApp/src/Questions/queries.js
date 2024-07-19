import { gql, useQuery } from '@apollo/client'

export const GET_QUESTIONS_Subscription= gql`
subscription QuestionsSubscription {
  questions{
    id 
    text
  }
}
`;