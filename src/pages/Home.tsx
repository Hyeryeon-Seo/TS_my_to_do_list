import Header from "../components/layout/Header";
import TodoController from "../components/todo/TodoController";
import { TodoSetList } from "../types/todoType";

const Home = ({ todoList, setTodoList }: TodoSetList) => {
	return (
		<div>
			<Header />
			<TodoController todoList={todoList} setTodoList={setTodoList} />
		</div>
	);
};

export default Home;
