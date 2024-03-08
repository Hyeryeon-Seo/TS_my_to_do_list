import { configureStore } from "@reduxjs/toolkit";
import { todoListReducer } from "../modules/todoListSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const store = configureStore({
	reducer: { todoList: todoListReducer },
});

export default store;
type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
