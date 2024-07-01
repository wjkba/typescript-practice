// polymorphic component
// wraps all kinds of components

import {
  type ReactNode,
  type ElementType,
  type ComponentPropsWithoutRef,
} from "react";

type ContainerProps<T extends ElementType> = {
  // wartoscia ElementType jest identifier componentu, identifier
  // na przykladzie componentu <button></button> to button
  as?: T;
  children: ReactNode;
} & ComponentPropsWithoutRef<T>;

export default function Container<C extends ElementType>({
  as,
  children,
  ...props
}: ContainerProps<C>) {
  const Component = as || "div"; // Component to prop
  return <Component {...props}>{children}</Component>;
}
