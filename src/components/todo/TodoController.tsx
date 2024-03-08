import React, { useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import CustomOrderSelect from "../common/CustomOrderSelect";
import TodoList from "./TodoList";
import styled from "styled-components";
import { useAppDispatch } from "../../config/configStore";
import { getTodosThunk, sortTodos } from "../../modules/todoListSlice";
import { useQuery } from "@tanstack/react-query";
import { fetchTodos } from "../../api/todo-api";
import { DoneTodo, InProgressTodo, Todo } from "../../types/todoType";

function TodoController() {
	const dispatch = useAppDispatch();
	const {
		data: todoList,
		isLoading,
		error,
		// isSuccess,
	} = useQuery({
		// data안들어올수있으니 isLoading 등 처리해주기 -BUT 그래도 undefined가능으로 뜸
		queryKey: ["todoList"],
		queryFn: () => fetchTodos(),
	});

	// const fetchTodoList = async () => {
	// 	dispatch(getTodosThunk());
	// };

	const [sortOrder, setSortOrder] = useState<string>("asc");

	// 추가: 마감날짜 오름차순 내림차순 정렬 드롭다운 메뉴 _select 설정시
	const handleSortOrderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setSortOrder(e.target.value);
		dispatch(sortTodos(e.currentTarget.value));
	};

	useEffect(() => {
		if (sortOrder === "asc") {
			dispatch(sortTodos("asc"));
			return;
		}
		dispatch(sortTodos("desc"));
	}, [sortOrder, dispatch]);

	// useEffect(() => {
	// 	fetchTodoList();
	// }, []);
	// if (isSuccess) {
	const workingTodoList: Todo[] = todoList?.filter(
		(todo) => todo.isDone === false
	) as InProgressTodo[];

	const doneTodoList = todoList?.filter(
		(todo) => todo.isDone === true
	) as DoneTodo[];

	if (isLoading) return <div>Loading ...</div>;
	if (error) {
		console.log("error : ", error);
		return <div> Error : {error.message} </div>;
	}
	return (
		<main>
			<TodoForm />
			{/* 순서정렬 select태그 섹션 */}
			<CustomOrderSelect
				selectValue={sortOrder}
				selectOnChange={handleSortOrderChange}
			>
				마감일 순으로 보기
			</CustomOrderSelect>
			<ListsSection>
				<TodoList type="working" todoList={workingTodoList}>
					Working 🏃‍♀️
				</TodoList>
				<TodoList type="done" todoList={doneTodoList}>
					Done 🎉
				</TodoList>
			</ListsSection>
		</main>
	);
}

export default TodoController;

const ListsSection = styled.section`
	max-height: 1000px;
	margin-top: 30px;
`;
