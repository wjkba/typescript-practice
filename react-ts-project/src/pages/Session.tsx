import { useParams } from "react-router-dom";

import { SESSIONS } from "../dummy-sessions.ts";
import Button from "../components/Button.tsx";
import BookSession from "../sessions/BookSession.tsx";
import { useState } from "react";

export default function SessionPage() {
  const params = useParams<{ id: string }>();
  const sessionId = params.id;
  const loadedSession = SESSIONS.find((session) => session.id === sessionId);
  const [isBooking, setIsBooking] = useState(false);

  if (!loadedSession) {
    return (
      <main id="session-page">
        <p>No session found!</p>
      </main>
    );
  }

  const bookingInfo = {
    id: loadedSession?.id,
    title: loadedSession?.title,
    summary: loadedSession?.summary,
    date: loadedSession?.date,
  };

  return (
    <>
      {isBooking && (
        <BookSession
          isBooking={isBooking}
          setIsBooking={setIsBooking}
          bookingInfo={bookingInfo}
        />
      )}
      <main id="session-page">
        <article>
          <header>
            <img src={loadedSession.image} alt={loadedSession.title} />
            <div>
              <h2>{loadedSession.title}</h2>
              <time dateTime={new Date(loadedSession.date).toISOString()}>
                {new Date(loadedSession.date).toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </time>
              <p>
                <Button onClick={() => setIsBooking(true)}>Book Session</Button>
              </p>
            </div>
          </header>
          <p id="content">{loadedSession.description}</p>
        </article>
      </main>
    </>
  );
}
