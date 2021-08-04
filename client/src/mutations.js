import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation Mutation($loginInput: LoginInput!) {
    login(input: $loginInput) {
      token
      user {
        _id
        email
        username
      }
    }
  }
`;

// export const ADD_USER = gql``;

// export const SAVE_BOOK = gql``;

// export const REMOVE_BOOK = gql``;
