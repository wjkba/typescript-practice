import { type ReactNode, createContext, useContext, useReducer } from "react";

export type Timer = {
  name: string;
  duration: number;
};

type TimersState = {
  isRunning: boolean;
  timers: Timer[];
};

const initialState: TimersState = {
  isRunning: true,
  timers: []
}

type TimersContextValue = TimersState & {
  addTimer: (timerData: Timer) => void;
  startTimers: () => void;
  stopTimers: () => void;
};

// tworzy context object, ktory potrzebny do zarzadzania danych w aplikacji
// generic <TimersContextValue> okresla strukture danych ktore beda przechowywane w context
export const TimersContext = createContext<TimersContextValue | null>(null);

export function useTimersContext() {
  const timersCtx = useContext(TimersContext);
  if (timersCtx === null) {
    throw new Error("TimersContext is null - that should not happen");
  }
  return timersCtx;
}

type TimersContextProviderProps = {
  children: ReactNode;
};

type StartTimersAction = {
  type: "START_TIMERS"
}
type StopTimersAction = {
  type: "STOP_TIMERS"
}
type AddTimerAction = {
  type: "ADD_TIMER",
  payload: Timer,
}

type Action = StartTimersAction | StopTimersAction | AddTimerAction

function timersReducer(state: TimersState, action: Action): TimersState { // koncowy wynik funkcji ma byc TimersState, tak samo jak stan poczatkowy
  if(action.type === "START_TIMERS"){
    return {
      ...state,
       isRunning: true
    }
  }
  if(action.type === "STOP_TIMERS"){
    return{
      ...state,
      isRunning: false
    }
  }
  if(action.type === "ADD_TIMER"){
    return{
      ...state,
      timers:[
        ...state.timers,
        {
          name: action.payload.name,
          duration: action.payload.duration
        }
      ]
    }
  }

  return state
}

// Provider umozliwia korzystanie z context, bedzie wrapowal componenty
export default function TimersContextProvider({
  children,
}: TimersContextProviderProps) {
  
  // ===== REDUCER =====
  
  // timersState to aktualny stan timerow, 
  // dispatch wysyla wiadomosci do reducer zeby aktualizowac timersState
  // reducer okresla jak stan timersState zmienia sie w odpowiedzi na rozne akcje
  // initialState to poczatkowy stan timersState
  const [timersState, dispatch] = useReducer(timersReducer, initialState)



  const ctx: TimersContextValue = {
    timers: timersState.timers,
    isRunning: timersState.isRunning,
    addTimer(timerData) {
      dispatch({type:"ADD_TIMER", payload: timerData})
    },
    startTimers() {
      dispatch({type:"START_TIMERS"})
    },
    stopTimers() {
      dispatch({type:"STOP_TIMERS"})
    },
  };
  return (
    <TimersContext.Provider value={ctx}>{children}</TimersContext.Provider>
  );
}
