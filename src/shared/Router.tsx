import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import { Todo } from "../types/todoType";
import { sampleTodo } from "../assets/sampleTodo";

const Router = () => {
	const [todoList, setTodoList] = useState<Todo[]>([sampleTodo]);

	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route
						path="/"
						element={<Home todoList={todoList} setTodoList={setTodoList} />}
					/>
					<Route path="/:todoId" element={<Detail todoList={todoList} />} />
					<Route path="*" element={<Navigate replace to="/" />} />
					{/*그 외 다른 path name이 url에 온 경우(*) 홈으로 이동(redirect)시키기 : Navigate사용 */}
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default Router;
