import { type ReactNode } from "react";

interface HintBoxProps {
  mode: "hint";
  children: ReactNode;
}

interface WarningBoxProps {
  mode: "warning";
  severity: "low" | "medium" | "high";
  children: ReactNode;
}

// to jest union dwoch interfejsow ktory pozwala InfoBoxProps
// na akceptowanie typow ktore maja rozne wlasciwosci
type InfoBoxProps = HintBoxProps | WarningBoxProps;

export default function InfoBox(props: InfoBoxProps) {
  // info, warning
  const { children, mode } = props;
  if (mode === "hint") {
    return (
      <aside className="infobox infobox-hint">
        <p>{children}</p>
      </aside>
    );
  }

  // tutaj wiemy, ze mode nie mzoe byc hint bo przeszedl if checka
  // typescript to rozumie dlatego moge uzyskac severity z props
  const { severity } = props;
  //

  return (
    <aside className={`infobox infobox-warning warning--${severity}`}>
      <h2>Warning</h2>
      <p>{children}</p>
    </aside>
  );
}
