const { gql } = require('apollo-server-express');

const typeDefs = gql`
  input BookInput {
    authors: String!
    description: String!
    bookId: String!
    image: String!
    link: String!
    title: String!
  }

  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    savedBooks: [bookSchema]!
  }

  type Book {
    _id: ID!
    authors: String!
    description: String!
    bookId: String!
    image: String!
    link: String!
    title: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(id: ID!, input: BookInput): User
    removeBook(bookId: ID!): User
  }
`;

module.exports = typeDefs;
