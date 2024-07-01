import Input from "./components/Input";
import Button from "./components/Button";
import Container from "./components/Container";
import { useRef } from "react";
import Form, { type FormHandle } from "./components/Form";

function App() {
  const input = useRef<HTMLInputElement>(null);

  const customForm = useRef<FormHandle>(null);

  function handleSave(data: unknown) {
    const extractedData = data as { name: string; age: string };
    console.log(extractedData);
    customForm.current?.clear(); // metoda dostepna dzieki UseImperativeHandler w Form.tsx
  }

  return (
    <main>
      <Form onSave={handleSave} ref={customForm}>
        <Input type="text" label="Name" id="name" />
        <Input type="number" label="Age" id="age" />
        <p>
          <Button el="button">Save</Button>
        </p>
      </Form>
      <br />
      <br />
      <Input label="Test" id="test" ref={input} />
      <Container as={Button} onClick={() => {}} type="button" el="button">
        Click me
      </Container>
      <p>
        <Button el="button"> A Button</Button>
      </p>
      <p>
        <Button el="anchor" href="https://google.com">
          A link
        </Button>
      </p>
      <Input id="name" label="Your name" type="text" />
      <Input id="age" label="Your age" type="number" />
    </main>
  );
}

export default App;
