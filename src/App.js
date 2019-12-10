import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

const app = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      {
        name: "Max",
        age: 28
      },
      {
        name: "Manu",
        age: 29
      },
      {
        name: "Stephanie",
        age: 26
      }
    ]
  });

  const [otherState, setOtherState] = useState({
    otherState: "some other value"
  });

  console.log(personsState, otherState);

  const switchNameHandler = () => {
    // console.log("switchNameHandler");
    // DON'T DO THIS: this.state.persons[0].name = "Tulio";
    setPersonsState({
      persons: [
        {
          name: "Tulio",
          age: 28
        },
        {
          name: "Manu",
          age: 29
        },
        {
          name: "Stephanie",
          age: 33
        }
      ],
      otherState: personsState.otherState
    });
  };

  // state = {
  //   persons: [
  //     {
  //       name: "Max",
  //       age: 28
  //     },
  //     {
  //       name: "Manu",
  //       age: 29
  //     },
  //     {
  //       name: "Stephanie",
  //       age: 26
  //     }
  //   ],
  //   otherState: "some other value"
  // };

  // render() {
  return (
    <div className="App">
      <h1>Hi, I'm a React app</h1>
      <p>This is really working!</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
      >
        My hobbies: Racing
      </Person>
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
      />
    </div>
  );

  // return React.createElement(
  //   "div",
  //   { className: "App" },
  //   React.createElement("h1", null, "Does this work now?")
  // );
  // }
};

export default app;
