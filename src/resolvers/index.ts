import { createUserResolver, getUsersResolver } from "./user";
import {
  getMessagesResolver,
  sendMessageResolver,
  getMessagesSubscription,
} from "./messages";

export default {
  Query: {
    users: getUsersResolver,
    messages: getMessagesResolver,
  },
  Mutation: {
    createUser: createUserResolver,
    sendMessage: sendMessageResolver,
  },
  Subscription: {
    messages: {
      subscribe: getMessagesSubscription,
    },
  },
};
