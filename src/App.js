import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
import { render } from "react-dom";
import person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: "qeqw45456", name: "Pugna", age: 8 },
      { id: "qweqe88", name: "Brewmaster", age: 52 },
      { id: "asd5weq5", name: "Crystal Maiden", age: 20 }
    ],
    showPersons: false
  };

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(orang => {
      return orang.id === id;
    });
    // personIndex will always change because it was in onChange method
    // onChange will always listen to event change

    console.log(`ini adalah ${personIndex}`);

    const person = { ...this.state.persons[personIndex] };
    console.log(person);

    person.name = event.target.value;
    //replace the new object(person) with key name and with value inputted by user

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  deletePersonHandler = personIndex => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons
    });
  };

  toggleNameHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1 px solid blue",
      padding: "8px",
      cursor: "pointer"
    };
    const checkPerson = this.state.showPersons;
    const arrPerson = this.state.persons;
    let persons = null;
    if (checkPerson) {
      persons = (
        <div>
          {arrPerson.map((person, index) => {
            return (
              <Person
                onChange={event => this.nameChangeHandler(event, person.id)}
                key={person.id}
                onClick={this.deletePersonHandler.bind(this, index)}
                name={person.name}
                age={person.age}
              />
            );
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, i'm a React App</h1>
        <p>Tihs is my list of Dota 2 Hero names :</p>
        <button style={style} onClick={this.toggleNameHandler}>
          Show List
        </button>
        {persons}
      </div>
    );
  }
}

export default App;

// Using Hooks
// const App = props => {
//   const [personsState, setPersonsState] = useState({
//     persons: [
//       { name: "Max", age: 25 },
//       { name: "Latif", age: 22 }
//     ]
//   });
// React Hooks
// const switchNameHandler = () => {
//   // console.log("kepencet");
//   // DONT DO THIS, AS REACT CANT MUTATE STATE DIRECTLY
//   // personsState.persons[0].name = "Botak";
//   setPersonsState({
//     persons: [
//       { name: "Abdul", age: 30 },
//       { name: "Hajiry", age: 25 }
//     ],
//     otherValue: "testing"
//   });
// };

// const [otherValue, setOtherValue] = useState("testing");
// console.log(personsState, otherValue);
