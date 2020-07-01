import React, { Component } from 'react'

import classes from './App.css'
import Person from './Person/Person.component'

class App extends Component {
  state = {
    persons: [
      { id: 'person100', name: 'Ashish', age: 34 },
      { id: 'person101', name: 'Puppy', age: 26 },
      { id: 'person102', name: 'Puplet', age: 1 },
    ],
    showPersonDiv: true,
  }

  switchPersonInfoHandler = (someName) => {
    this.setState({
      persons: [
        { name: someName, age: 34 },
        { name: 'Dhuppy', age: Math.round(Math.random() * 100, 0) },
        { name: 'Puplet', age: 100 },
      ],
    })
  }

  deletePersonHandler = (personIndex) => {
    const tempPersons = [ ...this.state.persons ]
    tempPersons.splice(personIndex, 1)
    this.setState({ persons: tempPersons })
  }

  nameChangedHandler = (event, id) => {
    const toUpdatedPersonIdx = this.state.persons.findIndex(person => person.id === id)
    const toUpdatedPerson = {
      ...this.state.persons[ toUpdatedPersonIdx ]
    }
    toUpdatedPerson.name = event.target.value

    const tempPersons = [ ...this.state.persons ]
    tempPersons[ toUpdatedPersonIdx ] = toUpdatedPerson

    this.setState({
      persons: tempPersons,
    })
  }

  togglePersonHandler = (_) => {
    this.setState({
      showPersonDiv: !this.state.showPersonDiv,
    })
  }

  render() {
    let personDiv = null
    let btnClasses = ''

    if (this.state.showPersonDiv) {
      personDiv = (
        <div>
          { this.state.persons.map((person, index) => (
            <Person
              name={ person.name }
              age={ person.age }
              key={ person.id }
              clicked={ (_) => this.switchPersonInfoHandler('Fancy Ashish') }
              deleteClicked={ () => this.deletePersonHandler(index) }
              inputChanged={ (event) => this.nameChangedHandler(event, person.id) }
            />
          )) }
        </div>
      )

      btnClasses = classes.Red
    }

    const assignedClasses = []
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red)
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold)
    }

    return (
      <div className={ classes.App }>
        <h1>Hello from ashish</h1>
        <p className={ assignedClasses.join(' ') }>Another element within root app</p>

        <button className={ btnClasses } onClick={ this.togglePersonHandler }> { this.state.showPersonDiv ? 'Hide' : 'Show' } Person Div</button>

        { personDiv }
      </div>
    )
  }
}

export default App
