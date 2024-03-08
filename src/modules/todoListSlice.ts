import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Todo } from "../types/todoType";
import {
	createTodo,
	fetchTodos,
	removeTodo,
	updateTodo,
} from "../api/todo-api";

const initialState: Todo[] = [];

export const getTodosThunk = createAsyncThunk("todoList/getTodos", fetchTodos);
export const addTodoThunk = createAsyncThunk("todoList/addTodo", createTodo);
export const deleteTodoThunk = createAsyncThunk(
	"todoList/deleteTodo",
	removeTodo
);
export const toggleTodoThunk = createAsyncThunk(
	"todoList/toggleTodo",
	async (id, { getState }) => {
		const state = getState();
		const todos = state.todoList;

		await updateTodo(id, {
			isDone: !todos.find((todoItem) => todoItem.id === id).isDone,
		});
		return id;
	}
	// updateTodo
);

export const todoListSlice = createSlice({
	name: "todoList",
	initialState,
	reducers: {
		// getTodos: (state, action: PayloadAction<Todo[]>) => {
		// 	return action.payload;
		// },
		// addTodo: (state, action: PayloadAction<Todo>) => {
		// 	return [...state, action.payload];
		// },
		// deleteTodo: (state, action: PayloadAction<string>) => {
		// 	return state.filter((todo) => todo.id !== action.payload);
		// },
		// toggleTodo: (state, action: PayloadAction<string>) => {
		// 	return state.map((todo) => {
		// 		if (todo.id === action.payload) {
		// 			return { ...todo, isDone: !todo.isDone };
		// 		} else {
		// 			return todo;
		// 		}
		// 	});
		// },
		sortTodos: (state, action: PayloadAction<string>) => {
			const sortOrder = action.payload;
			return state.sort((a, b) => {
				if (sortOrder === "asc") {
					return (
						new Date(a.deadline).getTime() - new Date(b.deadline).getTime()
					);
				} else {
					return (
						new Date(b.deadline).getTime() - new Date(a.deadline).getTime()
					);
				}
			});
		},
	},
	extraReducers: (builder) => {
		builder.addCase(getTodosThunk.fulfilled, (state, action) => {
			action.payload;
		});

		// builder.addCase(
		// 	addTodoThunk.fulfilled,
		// 	(state, action: PayloadAction<Todo>) => {
		// 		state.push(action.payload);
		// 	}
		// );

		// builder.addCase(
		// 	deleteTodoThunk.fulfilled,
		// 	(state, action: PayloadAction<Todo>) => {
		// 		const targetIndex = state.findIndex(
		// 			(todo) => todo.id === action.payload
		// 		);
		// 		state.splice(targetIndex, 1); // 1개의 원소만 제거
		// 	}
		// );
		// builder.addCase(toggleTodoThunk.fulfilled, (state, action) => {
		// 	const targetTodo = state.find((todo) => todo.id === action.payload);
		// 	targetTodo?.isDone = !targetTodo?.isDone;
		// });
	},
});

export const { sortTodos } = todoListSlice.actions;
export const todoListReducer = todoListSlice.reducer;
