import { useState } from 'react';

function App() {
  const [greeting, setGreeting] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const name = event.target.elements.name.value;
    fetch(
      `${import.meta.env.CANISTER_ID}/greet`,
      {
        method: 'POST',
        headers: [['Content-Type', 'application/json']],
        body: JSON.stringify({
          name: name
        })
      }
    ).then(response => response.json()).then((json) => {
      setGreeting(json.greeting)
    });
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
    </main >
  );
}

export default App;
