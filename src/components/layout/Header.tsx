import styled from "styled-components";

function Header() {
	return (
		<header>
			<HeaderTitle>💕 My To-Do List 🐾</HeaderTitle>
			<HeaderName>React 4기 서혜련</HeaderName>
		</header>
	);
}

export default Header;

const HeaderTitle = styled.h1`
	font-family: "Pretendard-Black";
	font-size: 30px;
	font-weight: 900;
	margin-left: 20px;
	margin-top: 5px;
	margin-bottom: 10px;
`;

const HeaderName = styled.h1`
	font-family: "Pretendard-Light";
	font-size: 12px;
	margin-top: 20px;
	color: slategray;
`;
