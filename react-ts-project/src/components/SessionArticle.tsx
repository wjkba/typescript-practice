import Button from "./Button";

type SessionArticleProps = {
  session: Session;
};

type Session = {
  id: string;
  title: string;
  summary: string;
  description: string;
  duration: number;
  date: string;
  image: string;
};

export default function SessionArticle({ session }: SessionArticleProps) {
  return (
    <article className="session-item">
      <img src={session.image} alt={session.title} />
      <div className="session-data">
        <div>
          <h3>{session.title}</h3>
          <p>{session.summary}</p>
        </div>
        <p className="actions">
          <Button to={session.id}>Learn More</Button>
        </p>
      </div>
    </article>
  );
}
