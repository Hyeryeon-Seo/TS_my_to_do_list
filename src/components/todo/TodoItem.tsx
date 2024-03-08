import { useAppDispatch } from "../../config/configStore";
import { deleteTodoThunk, toggleTodoThunk } from "../../modules/todoListSlice";
import * as S from "../../styles/TodoStyle";
import { Todo } from "../../types/todoType";

function TodoItem({ type, todo }: { type: string; todo: Todo }) {
	const dispatch = useAppDispatch();

	const { id, title, content, deadline } = todo;
	let dateDeadline = "";
	let deadlineText = "";
	if (deadline === "9999-12-31") {
		// 넘겨받은 deadline이 없는 경우 (미정)
		deadlineText = "마감일 미정";
	} else {
		dateDeadline = new Date(deadline).toLocaleDateString("ko-KR", {
			year: "2-digit",
			month: "long",
			day: "numeric",
		});
		deadlineText = dateDeadline + "까지";
	}

	// 삭제 버튼: filter메서드로 해당id의 카드빼기
	const deleteTodoHandler = (id: string) => {
		dispatch(deleteTodoThunk(id));
	};

	// Done 완료&완료취소 버튼 (토글)
	const onToggleTodoItem = (id: string) => {
		dispatch(toggleTodoThunk(id));
	};

	return (
		<S.TodoBox key={id}>
			<S.TodoLink to={`${id}`}>
				<S.TodoTextBox $type={type}>
					<S.TodoTitle>{title}</S.TodoTitle>
					<S.TodoContent>{content}</S.TodoContent>
					<S.TodoDeadline>{deadlineText}</S.TodoDeadline>
				</S.TodoTextBox>
			</S.TodoLink>
			<S.TodoBtnBox>
				<S.BtnDelDone onClick={() => deleteTodoHandler(id)} $type="delete">
					삭제
				</S.BtnDelDone>
				<S.BtnDelDone onClick={() => onToggleTodoItem(id)} $type="isDone">
					{type === "working" ? "완료" : "완료 취소"}
				</S.BtnDelDone>
			</S.TodoBtnBox>
		</S.TodoBox>
	);
}

export default TodoItem;
