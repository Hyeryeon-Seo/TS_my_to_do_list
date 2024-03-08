import React, { useState } from "react";
import TodoForm from "./TodoForm";
import CustomOrderSelect from "../common/CustomOrderSelect";
import TodoList from "./TodoList";
import styled from "styled-components";
import { DoneTodo, InProgressTodo, Todo } from "../../types/todoType";
import { addTodo, sortTodos } from "../../../modules/todoListSlice";
import { useAppDispatch, useAppSelector } from "../../../config/configStore";

function TodoController() {
	const dispatch = useAppDispatch();
	const todoList = useAppSelector((state) => state.todoList);

	const [sortOrder, setSortOrder] = useState<string>("desc"); //초기설정 빠른순? 설정안됨

	// 추가: 마감날짜 오름차순 내림차순 정렬 드롭다운 메뉴 _select 설정시
	const handleSortOrderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		// setSortOrder(e.target.value);
		// sortTodoItems(sortOrder);
		dispatch(sortTodos(e.target.value)); // ?
	};

	// todoItem 정렬하는 함수
	// const sortTodoItems = (sortOrder: string) => {
	// 	dispatch(sortTodos(sortOrder));
	// };

	// // 추가하기 버튼 addTodoHandler
	// const addTodoHandler = (newTodo: Todo) => {
	// 	dispatch(addTodo(newTodo));
	// };

	// // form태그에 들어가는 함수 - 입력 후 추가하기로 실행
	// const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
	// 	e.preventDefault();

	// 	const formData = new FormData(e.currentTarget);
	// 	const title = formData.get("title") as string;
	// 	const content = formData.get("content") as string;
	// 	const deadline = formData.get("deadline") as string;

	// 	const nextTodo: Todo = {
	// 		id: crypto.randomUUID(),
	// 		title,
	// 		content,
	// 		deadline,
	// 		isDone: false,
	// 	};

	// 	if (!title || !content) {
	// 		alert("제목과 내용 모두 입력해주세요");
	// 		// 이 경우 초기화없이 입력내용 유지시킴
	// 		return;
	// 	} else if (!deadline) {
	// 		addTodoHandler({
	// 			id: crypto.randomUUID(),
	// 			title,
	// 			content,
	// 			deadline: "9999-12-31",
	// 			isDone: false,
	// 		});
	// 		e.currentTarget.reset();
	// 	} else {
	// 		addTodoHandler(nextTodo);
	// 		e.currentTarget.reset(); //x
	// 	}
	// };

	// // 삭제 버튼: filter메서드로 해당id의 카드빼기
	// const deleteTodoHandler = (id: string) => {
	// 	dispatch(deleteTodo(id));
	// };

	// // Done 완료&완료취소 버튼 (토글)
	// const onToggleTodoItem = (id: string) => {
	// 	dispatch(toggleTodo(id));
	// };

	//  useEffect(() => {
	// 		if (sortOrder === "asc") {
	// 			dispatch(sortTodos("asc"));
	// 			return;
	// 		}
	// 		dispatch(sortTodos("desc"));
	// 	}, [sortOrder, dispatch]);
	return (
		<main>
			<TodoForm
			// onSubmit={handleFormSubmit}
			// valueTitle={title}
			// valueContent={content}
			// valueDeadline={deadline}
			// onChangeTitle={handleTitleInputChange}
			// onChangeContent={handleContentInputChange}
			// onChangeDeadline={handleDeadlineInputChange}
			/>
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
