import { useSessionsSelector } from "../store/hooks";
import Button from "./Button";
import UpcomingSession from "./UpcomingSession";
type UpcomingSessionsProps = {
  onClose: () => void;
};

export default function UpcomingSessions({ onClose }: UpcomingSessionsProps) {
  const upcomingSessions = useSessionsSelector((store) => store.sessions);

  if (upcomingSessions.length <= 0) {
    return (
      <div>
        <h2>Upcoming Sessions</h2>
        <p>No upcoming sessions</p>
        <p className="actions">
          <Button onClick={onClose}>Close</Button>
        </p>
      </div>
    );
  }

  return (
    <div>
      <h2>Upcoming Sessions</h2>
      <ul>
        {upcomingSessions.map((session) => (
          <li key={session.id}>
            <UpcomingSession
              id={session.id}
              title={session.title}
              summary={session.summary}
              date={session.date}
            />
          </li>
        ))}
      </ul>
      <p className="actions">
        <Button onClick={onClose}>Close</Button>
      </p>
    </div>
  );
}
