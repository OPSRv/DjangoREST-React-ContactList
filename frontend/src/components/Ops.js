import React from "react";
import { updateContactList } from "../Services/api-config";

export default class PersonList extends React.Component {
  state = {
    persons: [],
  };

  onClick() {
    console.log("button enter");
  }

  render() {
    console.log(this.state);
    const { persons } = this.state;
    return (
      <div>
        <ul>
          {this.state.persons.map((person) => (
            <li>{person.name}</li>
          ))}
        </ul>

        <button onClick={() => updateContactList()}>OPS</button>
      </div>
    );
  }
}
