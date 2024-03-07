import * as S from "../../styles/TodoStyle";
import { Todo } from "../../types/todoType";

function TodoItem({
	type,
	todo,
	title,
	content,
	deadline,
	deleteTodoHandler,
	onToggleTodoItem,
}: {
	type: string;
	todo: Todo;
	title: string;
	content: string;
	deadline: string;
	deleteTodoHandler: (id: string) => void;
	onToggleTodoItem: (id: string) => void;
}) {
	// const {
	// 	type,
	// 	todo,
	// 	title,
	// 	content,
	// 	deadline,
	// 	deleteTodoHandler,
	// 	onToggleTodoItem,
	// } = props;

	let dateDeadline = "";
	let deadlineText = "";
	if (deadline === "9999-12-31") {
		// 넘겨받은 deadline이 없는 경우 (미정)
		deadlineText = "마감일 미정";
		// setDeadlinetText("마감일 미정");
	} else {
		dateDeadline = new Date(deadline).toLocaleDateString("ko-KR", {
			//NOTE - 그냥 "2024-.."바로 .toLoclaeDateString 안되겠지?
			year: "2-digit",
			month: "long",
			day: "numeric",
		});
		deadlineText = dateDeadline + "까지";
	}

	return (
		<S.TodoBox key={todo.id}>
			<S.TodoLink to={`${todo.id}`}>
				<S.TodoTextBox type={type}>
					<S.TodoTitle>{title}</S.TodoTitle>
					<S.TodoContent>{content}</S.TodoContent>
					<S.TodoDeadline>{deadlineText}</S.TodoDeadline>
				</S.TodoTextBox>
			</S.TodoLink>
			{/* Link태그를 버튼까지 감싸버리면 버튼 작동 X */}
			<S.TodoBtnBox>
				<S.BtnDelDone onClick={() => deleteTodoHandler(todo.id)} type="delete">
					삭제
				</S.BtnDelDone>
				<S.BtnDelDone onClick={() => onToggleTodoItem(todo.id)} type="isDone">
					{type === "working" ? "완료" : "완료 취소"}
				</S.BtnDelDone>
			</S.TodoBtnBox>
		</S.TodoBox>
	);
}

export default TodoItem;
