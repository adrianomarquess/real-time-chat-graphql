import gql from "graphql-tag";

const Message = gql`
  type Query {
    messages: [Message]
  }

  type Message {
    user: User!
    text: String!
    date: String!
  }

  type SendMessageResponse {
    success: Boolean!
  }

  type Mutation {
    sendMessage(text: String!): SendMessageResponse!
  }

  type Subscription {
    messages: [Message]
  }
`;

export default Message;
