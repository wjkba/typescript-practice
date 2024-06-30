import { FormEvent, useRef } from "react";

interface NewGoalProps{
  onAddGoal: (goal:string, summary:string)=> void;
}

export default function NewGoal({onAddGoal}:NewGoalProps) {
  const goal = useRef<HTMLInputElement>(null);
  const summary = useRef<HTMLInputElement>(null)

  function handleSubmit(event: FormEvent<HTMLFormElement>){
    event.preventDefault()
   // new FormData(event.currentTarget) // automatycznie zbiera z dane z form

   const enteredGoal = goal.current!.value;
   const enteredSummary = summary.current!.value;

   event.currentTarget.reset()
   onAddGoal(enteredGoal, enteredSummary)
  }


  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="goal">Your goal</label>
        <input id="goal" type="text" ref={goal}/>
      </p>
      <p>
        <label htmlFor="summary">Short summary</label>
        <input id="summary" type="text" ref={summary}/>
      </p>
      <p>
        {/* do buttona nie dodaje onClick bo domyslnie wysyla form */}
        <button>Add Goal</button> 
      </p>
    </form>
  );
}
