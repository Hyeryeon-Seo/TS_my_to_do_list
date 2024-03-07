import { Todo } from "../../types/todoType";
import TodoItem from "./TodoItem";
import styled from "styled-components";

function TodoList({
	children,
	type,
	todoList,
	deleteTodoHandler,
	onToggleTodoItem,
}: {
	children: string;
	type: string;
	todoList: Todo[];
	deleteTodoHandler: (id: string) => void;
	onToggleTodoItem: (id: string) => void;
}) {
	return (
		<TodoListBox type={type}>
			<ListTitle>{children}</ListTitle>
			<hr />
			<List>
				{todoList.map((todo) => {
					return (
						<TodoItem
							type={type}
							todo={todo}
							title={todo.title}
							content={todo.content}
							deadline={todo.deadline}
							deleteTodoHandler={deleteTodoHandler}
							onToggleTodoItem={onToggleTodoItem}
						/>
					);
				})}
			</List>
		</TodoListBox>
	);
}

export default TodoList;

export interface TodoListBoxProps {
	type: string;
}

const TodoListBox = styled.div<TodoListBoxProps>`
	${({ type }) => (type === "working" ? "none" : "margin-top: 100px")}
`;

const List = styled.li`
	display: flex;
	margin-top: 10px;
	margin-left: 20px;
	/* 최대 최소넓이는 리스트 뜨는 부분에만 적용*/
	min-width: 800px;
	max-width: 1200px;
	min-height: 250px;
	flex-wrap: wrap;
`;

const ListTitle = styled.h2`
	font-size: x-large;
	font-weight: bold;
`;
