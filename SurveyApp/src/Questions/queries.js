import { gql, useQuery } from '@apollo/client'

export const GET_QUESTIONS_Subscription = gql`
subscription QuestionsSubscription {
  questions{
    id 
    text
    user_id
  }
}
`;

export const ADD_NEW_QUESTION_MUTATION = gql`
mutation AddNewQuestionMutation(
  $title: String!,
  $options: [options_insert_input!]!
  $user_id: String
  
  ) {
  insert_questions_one(
    object: {
      text: $title, 
      user_id: $user_id
      options: 
      {data: $options}}) {
    id
    text
  }
}
`