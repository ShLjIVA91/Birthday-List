import React, { useState } from 'react';
import List from './List';
import data from './data';

export default function App() {
  const [people, setPeople] = useState(data);
  return (
    <>
      <main>
        <section className="container">
          <h3>{people.length} Birthdays today</h3>
          <List people={people} />
          <button
            type="button"
            className="btn
            btn-block"
            onClick={() => setPeople([])}
          >
            Remove
          </button>
        </section>
      </main>
    </>
  );
}
