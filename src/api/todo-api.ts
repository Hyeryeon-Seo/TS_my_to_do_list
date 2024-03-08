// import axios from "axios";
import { Todo } from "../types/todoType";

const todoClient = axios.create({
	baseURL: import.meta.env.VITE_APP_SERVER_URL, // ../todos
	headers: {
		"Content-Type": "application/json",
	},
});

const getTodos = async () => {
	// fetchTodos
	const { data } = await todoClient.get("/");
	// console.log(data); //data는 있는데, 화면에 렌더링이 안되는?
	return data;
};

const getSingleTodo = async (id: string) => {
	const { data } = await todoClient.get(`/${id}`);
	return data;
};

const createTodo = async (todo: Todo) => {
	await todoClient.post("/", todo);
};

const deleteTodo = async (id: string) => {
	await todoClient.delete(`/${id}`);
};

const updateTodo = async ({ id, todo }: { id: string; todo: Todo }) => {
	await todoClient.patch(`/${id}`, todo);
};

export { getTodos, getSingleTodo, createTodo, deleteTodo, updateTodo };
