import CourseGoal from "./CourseGoal";

// import typu CourseGoal z App.tsx
// zeby uniknac konfliktow z nazewnictwem importujemy as inna_nazwa
import { type CourseGoal as CGoal } from "../App"; 

interface CourseGoalProps {
  goals: CGoal[];
  onDeleteGoal: (id:number) => void; // void bo funkcja niczego nie zwraca
}

export default function CourseGoalList({ goals, onDeleteGoal }: CourseGoalProps) {
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <CourseGoal id={goal.id} title={goal.title} onDelete={onDeleteGoal}>
            <p>{goal.description}</p>
          </CourseGoal>
        </li>
      ))}
    </ul>
  );
}
