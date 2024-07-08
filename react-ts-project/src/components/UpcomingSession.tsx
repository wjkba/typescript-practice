import Button from "./Button";

export default function UpcomingSession() {
  return (
    <article className="upcoming-session">
      <div>
        <h3>TITLE</h3>
        <p>DESCRIPTION</p>
        <time>DATE</time>
      </div>
      <p className="actions">
        <Button textOnly={true}>Cancel</Button>
      </p>
    </article>
  );
}
