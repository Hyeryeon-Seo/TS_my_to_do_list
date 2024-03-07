// import React from "react";
import CustomInput from "../common/CustomInput";
import * as S from "../../styles/TodoStyle";

function TodoForm({
	onSubmit,
	valueTitle,
	valueContent,
	valueDeadline,
	onChangeTitle,
	onChangeContent,
	onChangeDeadline,
}: {
	onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
	valueTitle: string;
	valueContent: string;
	valueDeadline: string;
	onChangeTitle: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onChangeContent: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onChangeDeadline: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
	return (
		<form onSubmit={onSubmit}>
			<CustomInput
				name="title"
				type="text"
				value={valueTitle}
				onChange={onChangeTitle}
				placeholder=" title ..."
			>
				제목
			</CustomInput>
			<CustomInput
				name="content"
				type="text"
				value={valueContent}
				onChange={onChangeContent}
				placeholder=" content ..."
			>
				내용
			</CustomInput>
			<CustomInput
				name="date"
				type="date"
				value={valueDeadline}
				onChange={onChangeDeadline}
				// ts : placeholder 없어서 에러 -> CustomInput에서 ? (옵셔널체이닝) 으로 해결
			>
				마감일
			</CustomInput>
			<S.BigBtn type="submit">추가하기</S.BigBtn>
		</form>
	);
}

export default TodoForm;
