import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Todo } from "../src/types/todoType";
// PayloadAction = action.payload 필드의 타입을 지정할 수 있게 해주는 제네릭이다.

const initialState: Todo[] = [
	{
		id: "0",
		title: "인증/인가 특강 복습하기",
		content: "인증/인가, 로그인/회원가입 로직 복습",
		deadline: "2024-03-10",
		isDone: false,
	},
];

export const todoListSlice = createSlice({
	name: "todoList",
	initialState,
	reducers: {
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
