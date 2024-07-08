import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "./store";
import { RootState } from "./store";

type DispatchFunction = () => AppDispatch;

export const useSessionsDispatch: DispatchFunction = useDispatch;
export const useSessionsSelector: TypedUseSelectorHook<RootState> = useSelector;
