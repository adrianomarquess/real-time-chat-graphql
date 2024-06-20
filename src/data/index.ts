type User = {
  userId: string;
  name: string;
};

type Message = {
  user: User;
  text: string;
  date: string;
};

let users: User[] = [];
let messages: Message[] = [];

export const getUsers = () => users;
export const addUser = (user: User) => {
  users = [...users, user];
};

export const getMessages = () => messages;
export const addMessage = (message: Message) => {
  messages = [...messages, message];
};
