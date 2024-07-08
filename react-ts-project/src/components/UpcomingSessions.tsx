import Button from "./Button";
import UpcomingSession from "./UpcomingSession";
type UpcomingSessionsProps = {
  onClose: () => void;
};

export default function UpcomingSessions({ onClose }: UpcomingSessionsProps) {
  return (
    <div>
      <h2>Upcoming Sessions</h2>
      <ul>
        <li>
          <UpcomingSession></UpcomingSession>
        </li>
      </ul>
      <p className="actions">
        <Button onClick={onClose}>Close</Button>
      </p>
    </div>
  );
}
