import axios from "axios";
import { Todo } from "../types/todoType";

const todoClient = axios.create({
	baseURL: "http://localhost:4000/todos",
	// import.meta.env.VITE_APP_SERVER_URL, // ../todos
	headers: {
		"Content-Type": "application/json",
	},
});

const fetchTodos = async (): Promise<Todo[]> => {
	try {
		const { data } = await todoClient.get("/"); // <Promise<Todo[]>>
		console.log(data);
		return data;
	} catch (error: any) {
		console.log(error);
		throw new Error(error.message);
	}
};

const getSingleTodo = async (id: string): Promise<Todo> => {
	try {
		const { data } = await todoClient.get(`/${id}`);
		console.log(data);
		return data;
	} catch (error: any) {
		throw new Error(error.message);
	}
};

const createTodo = async (todo: Todo): Promise<void> => {
	try {
		await todoClient.post("/", todo);
	} catch (error: any) {
		throw new Error(error.message);
	}
};

const removeTodo = async (id: string): Promise<void> => {
	try {
		await todoClient.delete(`/${id}`);
	} catch (error: any) {
		throw new Error(error.message);
	}
};

const updateTodo = async (id: string, todo: Todo): Promise<void> => {
	try {
		await todoClient.patch(`/${id}`, todo);
	} catch (error: any) {
		throw new Error(error.message);
	}
};

export { fetchTodos, getSingleTodo, createTodo, removeTodo, updateTodo };
