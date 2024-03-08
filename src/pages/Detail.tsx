import Header from "../components/layout/Header";
import { useNavigate, useParams } from "react-router-dom";
import * as S from "../styles/TodoStyle";
import { getSingleTodo } from "../api/todo-api";
import { useEffect, useState } from "react";
import { Todo } from "../types/todoType";

const Detail = () => {
	const { todoId } = useParams();
	const [todo, setTodo] = useState<Todo[]>([]);

	const navigate = useNavigate();

	useEffect(() => {
		const fetchTodo = async () => {
			const data = await getSingleTodo(todoId);
			setTodo(data);
		};

		fetchTodo();
	}, [todoId]);

	// 홈 화면으로 이동
	const onClickHomeHandler = () => {
		navigate("/");
	};

	if (!todo) {
		return <div>로딩 중</div>;
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
						<S.TodoTitle>{todo.title}</S.TodoTitle>
						<S.TodoContent $pageType="detail">{todo.content}</S.TodoContent>
						<S.TodoContent $pageType="detail">
							{todo.isDone ? "👍 완료 🎉" : "🏃‍♀️ 진행 중 🏃"}
						</S.TodoContent>
					</S.TodoDetailBox>
					<S.TodoDeadline $pageType="detail">
						{todo.deadline === "9999-12-31"
							? "마감일 미정"
							: `마감일 │ ${todo.deadline}`}
					</S.TodoDeadline>
				</S.DetailBox>
			</S.DetailWrapper>
		</>
	);
};

export default Detail;
