import Header from "../components/layout/Header";
import { useNavigate, useParams } from "react-router-dom";
import * as S from "../styles/TodoStyle";
import { Todo } from "../types/todoType";

const Detail = ({ todoList }: { todoList: Todo[] }) => {
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
		<div>
			<Header />
			<S.HomeBtnBox>
				<S.BigBtn onClick={onClickHomeHandler}>HOME</S.BigBtn>
			</S.HomeBtnBox>
			<S.DetailWrapper>
				<S.DetailBox>
					<S.TodoDetailBox>
						<S.TodoTitle>{selectedTodo.title}</S.TodoTitle>
						<S.TodoContent>{selectedTodo.content}</S.TodoContent>
						<S.TodoContent>
							{selectedTodo.isDone ? "👍 완료 🎉" : "🏃‍♀️ 진행 중 🏃"}
						</S.TodoContent>
					</S.TodoDetailBox>
					<S.TodoDeadline>
						{selectedTodo.deadline === "9999-12-31"
							? "마감일 미정"
							: `마감일 : ${selectedTodo.deadline}`}
					</S.TodoDeadline>
				</S.DetailBox>
			</S.DetailWrapper>
			<S.TodoBtnBox></S.TodoBtnBox>
		</div>
	);
};

export default Detail;
