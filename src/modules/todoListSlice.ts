import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Todo } from "../types/todoType";
import { sampleTodo } from "../assets/sampleTodo";

const initialState: Todo[] = sampleTodo;

export const todoListSlice = createSlice({
	name: "todoList",
	initialState,
	reducers: {
		fetchTodo: (state, action: PayloadAction<Todo[]>) => {
			return action.payload;
		},
		addTodo: (state, action: PayloadAction<Todo>) => {
			return [...state, action.payload];
		},
		deleteTodo: (state, action: PayloadAction<string>) => {
			return state.filter((todo) => todo.id !== action.payload);
		},
		toggleTodo: (state, action: PayloadAction<string>) => {
			return state.map((todo) => {
				if (todo.id === action.payload) {
					return { ...todo, isDone: !todo.isDone };
				} else {
					return todo;
				}
			});
		},
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
});

export const { addTodo, deleteTodo, toggleTodo, sortTodos } =
	todoListSlice.actions;
export const todoListReducer = todoListSlice.reducer;
