export interface Todo {
	id: string;
	title: string;
	content: string;
	deadline: string;
	isDone: boolean;
}

export interface TodoSetList {
	todoList: Todo[];
	setTodoList: (cb: (todoList: Todo[]) => Todo[]) => void;
}

// export interface TodoIdSetTodoList {
// 	id: string;
// 	setTodoList: (cb: (todoList: Todo[]) => Todo[]) => void;
// }