// import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Detail from "../pages/Detail";
// import { Todo } from "../types/todoType";
// import { sampleTodo } from "../assets/sampleTodo";

const Router = () => {
	// const [todoList, setTodoList] = useState<Todo[]>([sampleTodo]);

	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/:todoId" element={<Detail />} />
					<Route path="*" element={<Navigate replace to="/" />} />
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default Router;
