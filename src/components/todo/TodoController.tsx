import React, { useState } from "react";
import TodoForm from "./TodoForm";
import CustomOrderSelect from "../common/CustomOrderSelect";
import TodoList from "./TodoList";
import styled from "styled-components";
import {
	DoneTodo,
	InProgressTodo,
	Todo,
	TodoSetList,
} from "../../types/todoType";

const ListsSection = styled.section`
	max-height: 1000px;
	margin-top: 30px;
`;

function TodoController({ todoList, setTodoList }: TodoSetList) {
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");
	const [deadline, setDeadline] = useState("");
	const [sortOrder, setSortOrder] = useState<string>("desc"); //초기설정 빠른순? 설정안됨

	// input의 value값 가져오기
	const handleTitleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setTitle(e.target.value);
	};

	const handleContentInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setContent(e.target.value);
	};

	const handleDeadlineInputChange = (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		setDeadline(e.target.value);
	};

	// 추가: 마감날짜 오름차순 내림차순 정렬 드롭다운 메뉴 _select 설정시
	const handleSortOrderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setSortOrder(e.target.value);
		sortTodoItems(sortOrder);
	};

	// todoItem 정렬하는 함수
	const sortTodoItems = (sortOrder: string) => {
		setTodoList((prevTodoList) =>
			[...prevTodoList].sort((a, b) => {
				if (sortOrder === "asc") {
					return (
						new Date(a.deadline).getTime() - new Date(b.deadline).getTime()
					);
				} else {
					return (
						new Date(b.deadline).getTime() - new Date(a.deadline).getTime()
					);
				}
			})
		); // 정렬된 todoitem으로 todolist 상태 업데이트
	};

	// 추가하기 버튼 addTodoHandler
	const addTodoHandler = (newTodo: Todo) => {
		setTodoList((prevTodoList) => [...prevTodoList, newTodo]);
	};

	// form태그에 들어가는 함수 - 입력 후 추가하기로 실행
	const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const nextTodo: Todo = {
			id: crypto.randomUUID(),
			title,
			content,
			deadline,
			isDone: false,
		};

		if (!title || !content) {
			alert("제목과 내용 모두 입력해주세요");
			// 이 경우 초기화없이 입력내용 유지시킴
			return;
		} else if (!deadline) {
			addTodoHandler({
				id: crypto.randomUUID(),
				title,
				content,
				deadline: "9999-12-31",
				isDone: false,
			});
			setTitle("");
			setContent("");
			setDeadline("");
		} else {
			addTodoHandler(nextTodo);
			setTitle("");
			setContent("");
			setDeadline("");
		}
	};

	// 삭제 버튼: filter메서드로 해당id의 카드빼기
	const deleteTodoHandler = (id: string) => {
		setTodoList((prevTodoList) =>
			prevTodoList.filter((todo) => todo.id !== id)
		);
	};

	// Done 완료&완료취소 버튼 (토글)
	const onToggleTodoItem = (id: string) => {
		setTodoList((prevTodoList) =>
			prevTodoList.map((todo) => {
				if (todo.id === id) {
					return { ...todo, isDone: !todo.isDone };
				}
				return todo;
			})
		);
	};

	const workingTodoList = todoList.filter(
		(todo) => todo.isDone === false
	) as InProgressTodo[];
	const doneTodoList = todoList.filter(
		(todo) => todo.isDone === true
	) as DoneTodo[];

	return (
		<main>
			<TodoForm
				onSubmit={handleFormSubmit}
				valueTitle={title}
				valueContent={content}
				valueDeadline={deadline}
				onChangeTitle={handleTitleInputChange}
				onChangeContent={handleContentInputChange}
				onChangeDeadline={handleDeadlineInputChange}
			/>
			{/* 순서정렬 select태그 섹션 */}
			<CustomOrderSelect
				selectValue={sortOrder}
				selectOnChange={handleSortOrderChange}
			>
				마감일 순으로 보기
			</CustomOrderSelect>
			<ListsSection>
				<TodoList
					type="working"
					todoList={workingTodoList}
					deleteTodoHandler={deleteTodoHandler}
					onToggleTodoItem={onToggleTodoItem}
				>
					Working 🏃‍♀️
				</TodoList>
				<TodoList
					type="done"
					todoList={doneTodoList}
					deleteTodoHandler={deleteTodoHandler}
					onToggleTodoItem={onToggleTodoItem}
				>
					Done 🎉
				</TodoList>
			</ListsSection>
		</main>
	);
}

export default TodoController;
