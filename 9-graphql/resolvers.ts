import { IResolvers } from 'apollo-server-express';
import { v4 } from 'uuid';
import { GqlContext } from './GqlContext';
import { todos } from './db';

interface User {
  id: string;
  username: string;
  email?: string;
}

interface Todo {
  id: string;
  title: string;
  description?: string;
}

const resolvers: IResolvers = {
  Query: {
    getUser: async (obj: any, args: { id: string }, ctx: GqlContext, info: any): Promise<User> => {
      return {
        id: v4(),
        username: 'John Doe',
      };
    },
    getTodos: async (parent: any, args: null, ctx: GqlContext, info: any): Promise<Array<Todo>> => {
      return [
        {
          id: v4(),
          title: 'Todo 1',
          description: 'This is the first todo',
        },
        {
          id: v4(),
          title: 'Todo 2',
          description: 'This is the second todo',
        },
        {
          id: v4(),
          title: 'Todo 3',
        },
      ];
    },
  },
  Mutation: {
    addTodo: async (
      obj: any,
      args: { title: string; description?: string },
      ctx: GqlContext,
      info: any
    ): Promise<Todo> => {
      todos.push({
        id: v4(),
        title: args.title,
        description: args.description,
      });
      return todos[todos.length - 1];
    },
  },
};

export default resolvers;
