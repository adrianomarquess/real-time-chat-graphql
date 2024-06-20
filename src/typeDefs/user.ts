import gql from "graphql-tag";

const User = gql`
  type User {
    userId: ID!
    name: String!
  }

  type Query {
    users: [User]
  }

  type Mutation {
    createUser(name: String!): User!
  }
`;

export default User;
