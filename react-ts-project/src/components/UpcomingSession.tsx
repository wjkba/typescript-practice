import Button from "./Button";
import { cancel } from "../store/sessions-slice";
import { useSessionsDispatch } from "../store/hooks";

type UpcomingSessionProps = {
  id: string;
  title: string;
  summary: string;
  date: string;
};

export default function UpcomingSession({
  id,
  title,
  summary,
  date,
}: UpcomingSessionProps) {
  const dispatch = useSessionsDispatch();

  function handleCancelSession() {
    dispatch(cancel(id));
  }

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <article className="upcoming-session">
      <div>
        <h3>{title}</h3>
        <p>{summary}</p>
        <time dateTime={date}>{formattedDate}</time>
      </div>
      <p className="actions">
        <Button onClick={handleCancelSession} textOnly={true}>
          Cancel
        </Button>
      </p>
    </article>
  );
}
