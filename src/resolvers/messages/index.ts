import { PubSub } from "graphql-subscriptions";
import { getUsers, getMessages, addMessage } from "../../data";

const pubsub = new PubSub();
const NEW_MESSAGE = "NEW_MESSAGE";

export const sendMessageResolver = (_, { text }, context) => {
  const userId = context.userId;
  const user = getUsers().find((user) => user.userId === userId);

  if (!user) {
    throw new Error("User not found");
  }

  const message = {
    user,
    text,
    date: new Date().toISOString(),
  };

  addMessage(message);
  pubsub.publish(NEW_MESSAGE, { messages: getMessages() });

  return {
    success: true,
  };
};

export const getMessagesResolver = () => getMessages();

export const getMessagesSubscription = () => {
  return pubsub.asyncIterator([NEW_MESSAGE]);
};
