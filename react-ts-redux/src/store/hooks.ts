import {
  useDispatch,
  useSelector,
  type TypedUseSelectorHook,
} from "react-redux";
import { AppDispatch, RootState } from "./store";

type DispatchFunction = () => AppDispatch;

// lepsza wersja standardowego useDispatch, ktora zapewnia wiecej type safety
export const useCartDispatch: DispatchFunction = useDispatch;

// zalecane jest również tworzenie osobnego hooka dla selectora
export const useCartSelector: TypedUseSelectorHook<RootState> = useSelector;
