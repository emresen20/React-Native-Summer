import { gql, useQuery } from '@apollo/client'

export const GET_QUESTIONS_Subscription = gql`
subscription QuestionsSubscription {
  questions{
    id 
    text
  }
}
`;

export const ADD_NEW_QUESTION_MUTATION = gql`
mutation AddNewQuestionMutation($title: String!, $options: [options_insert_input!]!) {
  insert_questions_one(
    object: {
      text: $title, 
      options: 
      {data: $options}}) {
    id
    text
  }
}
`