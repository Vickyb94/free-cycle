import { gql } from  '@apollo/client';

export const LOGIN_USER = gql`
   mutation login($email: String!, $password: String!) {
      login(email: $email, password: $password) {
        token
        user {
            _id
            username
        }
      }
   }
`;

export const ADD_USER = gql`
   mutation addUser($username: String!, $email: String!, $password: String!) {
      addUser(username: $username, email: $email, password: $password) {
        token
        user {
            _id
            username
        }
      }
   }
`;

export const ADD_POST = gql`
   mutation addPost($postText: String!, $postAuthor: String!) {
      addPost(postText: $postText, postAuthor: $postAuthor) {
         _id
         postText
         postAuthor
         createdAt
         comments {
            _id
            commentText
         }
      }
   }
`;

export const ADD_COMMENT = gql`
   mutation addComment(
    $postId: ID!
    $commentText: String!
    $commentAuthor: String!
   ) {
    addComment(
        postId: $thoughtId
        commentText: $commentText
        commentAuthor: $commentAuthor
    ) {
        _id
        postText
        postAuthor
        createdAt
        comments {
            _id
            commentText
            createdAt
        }
    }
   }
`;