import Header from "../components/layout/Header";
import { useNavigate, useParams } from "react-router-dom";
import * as S from "../styles/TodoStyle";
import { Todo } from "../types/todoType";
import { useAppSelector } from "../config/configStore";

const Detail = () => {
	const todoList = useAppSelector((state) => state.todoList);
	const { todoId } = useParams();

	const navigate = useNavigate();
	const selectedTodo: Todo[] | unknown = todoList.find(
		(todo: Todo) => todo.id === todoId
	);

	// 홈 화면으로 이동
	const onClickHomeHandler = () => {
		navigate("/");
	};

	if (!todoList) {
		throw new Error("Unexpected error: Cannot find 'todoList'");
	}

	return (
		<>
			<Header />
			<S.HomeBtnBox>
				<S.BigBtn onClick={onClickHomeHandler} $pageType="detail">
					HOME
				</S.BigBtn>
			</S.HomeBtnBox>
			<S.DetailWrapper>
				<S.DetailBox>
					<S.TodoDetailBox>
						<S.TodoTitle>{selectedTodo.title}</S.TodoTitle>
						<S.TodoContent $pageType="detail">
							{selectedTodo.content}
						</S.TodoContent>
						<S.TodoContent $pageType="detail">
							{selectedTodo.isDone ? "👍 완료 🎉" : "🏃‍♀️ 진행 중 🏃"}
						</S.TodoContent>
					</S.TodoDetailBox>
					<S.TodoDeadline $pageType="detail">
						{selectedTodo.deadline === "9999-12-31"
							? "마감일 미정"
							: `마감일 │ ${selectedTodo.deadline}`}
					</S.TodoDeadline>
				</S.DetailBox>
			</S.DetailWrapper>
		</>
	);
};

export default Detail;
