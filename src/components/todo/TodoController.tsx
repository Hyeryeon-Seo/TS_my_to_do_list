import React, { useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import CustomOrderSelect from "../common/CustomOrderSelect";
import TodoList from "./TodoList";
import styled from "styled-components";
import { useAppDispatch } from "../../config/configStore";
import { sortTodos } from "../../modules/todoListSlice";
import { fetchTodos } from "../../api/todo-api";
import { Todo } from "../../types/todoType";

function TodoController() {
	const dispatch = useAppDispatch();

	const fetchTodoList = async () => {
		// : Promise<Todo[]>
		// const res : Promise  = await fetchTodos;
		const data = await fetchTodos;
		console.log(data);
		return data;
	};

	const [sortOrder, setSortOrder] = useState<string>("asc");

	// 추가: 마감날짜 오름차순 내림차순 정렬 드롭다운 메뉴 _select 설정시
	const handleSortOrderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setSortOrder(e.target.value);
		dispatch(sortTodos(e.currentTarget.value));
	};

	useEffect(() => {
		if (sortOrder === "asc") {
			dispatch(sortTodos("asc"));
			fetchTodoList();
			return;
		}
		dispatch(sortTodos("desc"));
	}, [sortOrder, dispatch]);
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
				<TodoList type="working">Working 🏃‍♀️</TodoList>
				<TodoList type="done">Done 🎉</TodoList>
			</ListsSection>
		</main>
	);
}

export default TodoController;

const ListsSection = styled.section`
	max-height: 1000px;
	margin-top: 30px;
`;
