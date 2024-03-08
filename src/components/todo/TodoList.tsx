import { useAppSelector } from "../../config/configStore";
import { DoneTodo, InProgressTodo } from "../../types/todoType";
import TodoItem from "./TodoItem";
import * as S from "../../styles/TodoStyle";

function TodoList({ children, type }: { children: string; type: string }) {
	const todoList = useAppSelector((state) => state.todoList);

	const workingTodoList = todoList.filter(
		(todo) => todo.isDone === false
	) as InProgressTodo[];

	const doneTodoList = todoList.filter(
		(todo) => todo.isDone === true
	) as DoneTodo[];

	const currentTodoList = type === "working" ? workingTodoList : doneTodoList;

	return (
		<S.TodoListBox $type={type}>
			<S.ListTitle>{children}</S.ListTitle>
			<hr />
			<S.List>
				{currentTodoList.map((todo) => {
					return <TodoItem type={type} todo={todo} />;
				})}
			</S.List>
		</S.TodoListBox>
	);
}

export default TodoList;
