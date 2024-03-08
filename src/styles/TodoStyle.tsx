import { Link } from "react-router-dom";
import styled from "styled-components";

export interface TodoPageTypeProps {
	$pageType?: string;
}

export interface TodoTypeProps {
	type: string;
}

export const BigBtn = styled.button<TodoPageTypeProps>`
	background-color: ${({ $pageType }) =>
		$pageType === "detail" ? "rgb(228, 197, 223)" : "rgb(253, 232, 250)"};
	width: 150px;
	height: 40px;
	border: none;
	margin-top: 10px;
	&:hover {
		box-shadow: 0px 0px 3px 1px lightcoral;
	}
`;

export const TodoBox = styled.ul`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin-top: 20px;
	background-color: rgb(255, 233, 205);
	border: none;
	border-radius: 5px;
	width: 255px;
	margin-right: 15px;
	&:hover {
		box-shadow: 0px 0px 3px 1px lightcoral;
	}
`;

export const TodoLink = styled(Link)`
	text-decoration: none;
	color: black;
`;

export const TodoTextBox = styled.div<TodoTypeProps>`
	text-decoration: ${({ type }) =>
		type === "working" ? "none" : "line-through gray"};
	display: flex;
	flex-direction: column;
	gap: 1rem;
	word-wrap: break-word;
`;

export const TodoTitle = styled.h2`
	font-size: 25px;
	font-weight: bold;
	margin: 20px 15px 0 15px;
	line-height: 1.5em;
`;

export const TodoContent = styled.p<TodoPageTypeProps>`
	margin: 0 20px 10px 20px;
	line-height: 1.5em;
	min-height: 20px;
	font-size: ${({ $pageType }) => ($pageType === "detail" ? "18px" : "")};
`;

export const TodoDeadline = styled.time<TodoPageTypeProps>`
	margin: ${({ $pageType }) =>
		$pageType === "detail" ? "15px 20px 30px auto" : "20px 20px 10px auto"};
	color: rgb(73, 65, 70);
	width: 90%;
	text-align: end;
	font-size: ${({ $pageType }) => ($pageType === "detail" ? "18px" : "15px")};
`;

export const TodoBtnBox = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const BtnDelDone = styled.button<TodoTypeProps>`
	background-color: rgb(250, 243, 231);
	width: 100px;
	height: 30px;
	border: 2px solid rgb(223, 173, 168);
	margin: 10px 10px 20px 10px;
	&:hover {
		color: white;
		background-color: ${({ type }) =>
			type === "delete" ? "rgb(250, 95, 67)" : "rgb(104, 104, 250)"};
	}
`;

export const HomeBtnBox = styled.div`
	margin: 40px auto 30px auto;
	display: flex;
	justify-content: end;
`;

export const DetailWrapper = styled.div`
	display: flex;
	justify-content: center;
`;

export const TodoDetailBox = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 2rem;
	word-wrap: break-word;
`;

export const DetailBox = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin-top: 20px;
	background-color: rgb(255, 233, 205);
	border: none;
	border-radius: 5px;
	width: 500px;
	min-height: 300px;
	margin-right: 15px;
	box-shadow: 0px 0px 3px 1px lightcoral;
`;

export const TitleContentInputBox = styled.div`
	display: flex;
	flex-direction: column;
`;
