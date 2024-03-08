import { useAppSelector } from "../../config/configStore";
import { DoneTodo, InProgressTodo, Todo } from "../../types/todoType";
import TodoItem from "./TodoItem";
import * as S from "../../styles/TodoStyle";

function TodoList({
	children,
	type,
	todoList,
}: {
	children: string;
	type: string;
	todoList: Todo[];
}) {
	// const todoList = useAppSelector((state) => state.todoList);

	// const currentTodoList = type === "working" ? workingTodoList : doneTodoList;

	return (
		<S.TodoListBox $type={type}>
			<S.ListTitle>{children}</S.ListTitle>
			<hr />
			<S.List>
				{todoList.map((todo) => {
					return <TodoItem type={type} todo={todo} />;
				})}
			</S.List>
		</S.TodoListBox>
	);
}

export default TodoList;
