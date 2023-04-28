import React from 'react';
import Person from './Person';
import people from './data';

export default function List({ people }) {
  return (
    <article className="container">
      {people.map((person) => {
        return (
          <Person
            {...person}
            key={person.id}
          />
        );
      })}
    </article>
  );
}
