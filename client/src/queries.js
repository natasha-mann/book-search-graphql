import { gql } from "@apollo/client";

export const GET_ME = gql`
  query Me($_id: ID!) {
    me(_id: $_id) {
      _id
      username
      email
      bookCount
      savedBooks {
        bookId
        authors
        description
        title
        image
        link
      }
    }
  }
`;
