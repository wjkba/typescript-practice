import { ComponentPropsWithoutRef, ReactNode } from "react";
import { Link } from "react-router-dom";

type ButtonProps = ButtonElementProps | LinkElementProps;

type ButtonElementProps = {
  children: ReactNode;
  textOnly?: boolean;
} & ComponentPropsWithoutRef<"button">;

type LinkElementProps = {
  to: string;
  children: ReactNode;
  textOnly?: boolean;
} & ComponentPropsWithoutRef<"a">;

export default function Button({ children, textOnly, ...props }: ButtonProps) {
  const className = `button ${textOnly && "button--text-only"}`;
  if ("to" in props) {
    return (
      <Link {...props} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <button {...props} className={className}>
      {children}
    </button>
  );

  // if (props.to) {
  //   return (
  //     <Link {...props} className={`button ${textOnly && "button--text-only"}`} to={props.to}>
  //       {children}
  //     </Link>
  //   );
  // }
  // return (
  //   <button className={`button ${textOnly && "button--text-only"}`}>
  //     {children}
  //   </button>
  // );
}
