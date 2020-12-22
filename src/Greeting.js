import React from "react";

const people = [
  {
    id: 1,
    name: "John",
    age: 24,
  },
  {
    id: 2,
    name: "Anna",
    age: 35,
  },
  {
    id: 3,
    name: "Manolo",
    age: 19,
  },
];

export default function Greeting() {
  return (
    <>
      {people.map((person) => (
        <Person key={person.id} {...person} />
      ))}
      <Message>
        <p>Well excuuuuuuuuse me princess.</p>
        <p className="marikong">
          So long gay bowser.
          <div>Letse go</div>
          <div>AAAAA</div>
        </p>
      </Message>
    </>
  );
}

const Person = ({ id, name, age }) => {
  return (
    <h2 onClick={() => personOnClick(id)}>
      Mi nombre es {name} y tengo {age} años.
    </h2>
  );
};

const personOnClick = (id) => {
  console.log("Click on " + id);
};

const Message = (props) => {
  console.log(props.children);
  return <div>Yeahhhh!</div>;
};
