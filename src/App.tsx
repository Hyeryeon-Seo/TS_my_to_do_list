import React from "react";
import Router from "./shared/Router";

function App() {
	return (
		<>
			{/* <GlobalStyle /> - index.js에서 임포트하는것으로 변경*/}
			{/*개선: Header와 나머지Body전체 컴포넌트화, App.jsx 간소화 > Home.jsx로 이동*/}
			<Router />
		</>
	);
}

export default App;
