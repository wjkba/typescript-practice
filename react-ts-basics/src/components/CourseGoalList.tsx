import CourseGoal from "./CourseGoal";

// import typu CourseGoal z App.tsx
// zeby uniknac konfliktow z nazewnictwem importujemy as inna_nazwa
import { type CourseGoal as CGoal } from "../App";
import InfoBox from "./InfoBox";
import { type ReactNode } from "react";

interface CourseGoalProps {
  goals: CGoal[];
  onDeleteGoal: (id: number) => void; // void bo funkcja niczego nie zwraca
}

export default function CourseGoalList({
  goals,
  onDeleteGoal,
}: CourseGoalProps) {
  if (goals.length === 0) {
    return (
      <InfoBox mode="hint">
        You have no course goals yet. Start adding some!
      </InfoBox>
    );
  }

  let warningBox: ReactNode;

  if (goals.length >= 4) {
    warningBox = (
      <InfoBox mode="warning" severity="medium">
        You're collecting a lot of goals. Don't put too much on your plate!
      </InfoBox>
    );
  }

  return (
    <>
    {/* zamiast robic jakies conditionals w jsx mozna stworzyc
    oddzielna wartosc ktora jest renderowana tylko if goals.length >=4 */}
    {warningBox} 
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoal id={goal.id} title={goal.title} onDelete={onDeleteGoal}>
              <p>{goal.description}</p>
            </CourseGoal>
          </li>
        ))}
      </ul>
    </>
  );
}
