import axios from "axios";
import { Todo } from "../types/todoType";

const todoClient = axios.create({
	baseURL: "http://localhost:4000/todos",
	// import.meta.env.VITE_APP_SERVER_URL, // ../todos
	headers: {
		"Content-Type": "application/json",
	},
});

const fetchTodos = async () => {
	// : Promise<Todo[]>
	try {
		const { data } = await todoClient.get("/");
		console.log(data); //data는 있는데, 화면에 렌더링이 안되는?
		return data;
	} catch (error: any) {
		throw new Error(error.message);
	}
};

const getSingleTodo = async (id: string): Promise<Todo> => {
	try {
		const { data } = await todoClient.get(`/${id}`);
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

const deleteTodo = async (id: string): Promise<void> => {
	try {
		await todoClient.delete(`/${id}`);
	} catch (error: any) {
		throw new Error(error.message);
	}
};

const updateTodo = async ({
	id,
	todo,
}: {
	id: string;
	todo: Todo;
}): Promise<void> => {
	try {
		await todoClient.patch(`/${id}`, todo);
	} catch (error: any) {
		throw new Error(error.message);
	}
};

export { fetchTodos, getSingleTodo, createTodo, deleteTodo, updateTodo };
