interface ITodo {
  _id?: string;
  text: string;
  status: boolean;
  createdAt?: string;
  updatedAt?: string;
}

interface TodoProps {
  todo: ITodo;
}

type Api = {
  message: string;
  status: string;
  todos: ITodo[];
  todo?: ITodo;
};
