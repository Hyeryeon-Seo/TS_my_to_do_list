export interface Todo {
	id: string;
	title: string;
	content: string;
	deadline: string;
	isDone: boolean;
}

export interface TodoSetList {
	todoList: Todo[];
	setTodoList: (todoList: Todo[]) => void;
}
