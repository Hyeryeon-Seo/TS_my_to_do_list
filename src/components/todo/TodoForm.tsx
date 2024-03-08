import CustomInput from "../common/CustomInput";
import * as S from "../../styles/TodoStyle";
import { Todo } from "../../types/todoType";
import { useAppDispatch } from "../../config/configStore";
import { addTodoThunk } from "../../modules/todoListSlice";

function TodoForm() {
	const dispatch = useAppDispatch();

	// 추가하기 버튼 addTodoHandler
	const addTodoHandler = (newTodo: Todo) => {
		dispatch(addTodoThunk(newTodo));
	};

	// form태그에 들어가는 함수 - 입력 후 추가하기로 실행
	const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const formData = new FormData(e.currentTarget);
		const title = formData.get("title") as string;
		const content = formData.get("content") as string;
		const deadline = formData.get("deadline") as string;

		const nextTodo: Todo = {
			id: crypto.randomUUID(),
			title,
			content,
			deadline,
			isDone: false,
		};

		if (!title.trim() || !content.trim()) {
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
			e.currentTarget.reset();
		} else {
			addTodoHandler(nextTodo);
			e.currentTarget.reset();
		}
	};

	return (
		<form onSubmit={handleFormSubmit}>
			<S.TitleContentInputBox>
				<CustomInput name="title" type="text" placeholder=" title ...">
					제목
				</CustomInput>
				<CustomInput
					name="content"
					type="text"
					placeholder=" content ..."
					$style="content"
				>
					내용
				</CustomInput>
			</S.TitleContentInputBox>
			<CustomInput name="deadline" type="date">
				마감일
			</CustomInput>
			<S.BigBtn type="submit">추가하기</S.BigBtn>
		</form>
	);
}

export default TodoForm;
