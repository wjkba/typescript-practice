import { ComponentPropsWithoutRef, forwardRef } from "react";

type InputProps = {
  label: string;
  id: string;
} & ComponentPropsWithoutRef<"input">; // do typu InputProps dodajemy mozliwosc podania props dla input

// kiedy uzywamy forwardRef funkcja oprocz propow dostaje ref parameter
// pierwszy typ ktory podajemy to generic funkcji to wartosc ktora bedzzie zarzadzana przez ref
// drugi typ odnosi sie do props, czyli InputProps
const Input = forwardRef<HTMLInputElement, InputProps>( function Input({ label, id, ...props }, ref) {
  return (
    <p>
      <label htmlFor={id}>{label}</label>
      <input id={id} name={id} {...props} ref={ref}/>
    </p>
  );
})

export default Input;