import { useState } from "react";
import { createActor, canisterId } from "../../declarations/backend";

function App() {
  const [greeting, setGreeting] = useState("");

  function handleSubmit(event: any) {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const backend = createActor(canisterId);
    backend.greet(name).then((greeting: any) => {
      setGreeting(greeting);
    });
    return false;
  }

  return (
    <main>
      <img src="/logo2.svg" alt="DFINITY logo" />
      <br />
      <br />
      <form action="#" onSubmit={handleSubmit}>
        <label htmlFor="name">Enter your name: &nbsp;</label>
        <input id="name" alt="Name" type="text" />
        <button type="submit">Click Me!</button>
      </form>
      <section id="greeting">{greeting}</section>
    </main>
  );
}

export default App;
