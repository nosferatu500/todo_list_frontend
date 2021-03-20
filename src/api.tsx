import axios, { AxiosResponse } from "axios";

const url = "http://localhost:4000";

export const getTodos = async (): Promise<AxiosResponse<Api>> => {
  try {
    const result: AxiosResponse<Api> = await axios.get(`${url}/todos`);
    return result;
  } catch (error) {
    throw new Error(error);
  }
};

export const addTodo = async (data: ITodo): Promise<AxiosResponse<Api>> => {
  try {
    const todo: Omit<ITodo, "_id"> = {
      text: data.text,
      status: false,
    };

    const result: AxiosResponse<Api> = await axios.post(`${url}/todo`, todo);
    return result;
  } catch (error) {
    throw new Error(error);
  }
};

export const updateTodo = async (data: ITodo): Promise<AxiosResponse<Api>> => {
  try {
    const update: Pick<ITodo, "status"> = {
      status: data.status,
    };

    const result: AxiosResponse<Api> = await axios.put(
      `${url}/todo/${data._id}`,
      update
    );
    return result;
  } catch (error) {
    throw new Error(error);
  }
};

export const deleteTodo = async (_id: string): Promise<AxiosResponse<Api>> => {
  try {
    const result: AxiosResponse<Api> = await axios.delete(`${url}/todo/${_id}`);
    return result;
  } catch (error) {
    throw new Error(error);
  }
};
