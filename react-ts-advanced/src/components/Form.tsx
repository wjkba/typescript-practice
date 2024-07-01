import { type FormEvent, type ComponentPropsWithoutRef, useRef, useImperativeHandle, forwardRef } from "react";

type FormProps = ComponentPropsWithoutRef<"form"> & {
  onSave: (value: unknown) => void;
};

// ten typ opisuje obiekts ktory jest zwracany przez UseImperativeHandle
export type FormHandle = {
  clear: ()=>void;
} 

const Form = forwardRef<FormHandle, FormProps>(function Form({ onSave, children, ...otherProps }, ref) {
  const form = useRef<HTMLFormElement>(null);

  // ten hook pozwala wywolanie metody przez parent component
  // ktora zdefiniowana jest w child component
  useImperativeHandle(ref, () => {
    return{
      clear() {
        console.log("CLEARING..")
        form.current?.reset()
      }
    }
  });

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // FormData automatycznie zbieramy wszystkie wartosci ktore zostaly wprowadzone
    // do formularzu przez wczesniej ustawione inputy
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData); // zamienia form data na latwiejszy do przelkniecia obiekt
    onSave(data);
  }
  return (
    <form onSubmit={handleSubmit} {...otherProps} ref={form}>
      {children}
    </form>
  );
})

export default Form