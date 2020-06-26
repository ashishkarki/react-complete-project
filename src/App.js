import React, { Component } from 'react'
import './App.css'
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

  switchPersonInfoHandler = ( someName ) => {
    this.setState( {
      persons: [
        { name: someName, age: 34 },
        { name: 'Dhuppy', age: Math.round( Math.random() * 100, 0 ) },
        { name: 'Puplet', age: 100 },
      ],
    } )
  }

  deletePersonHandler = ( personIndex ) => {
    //const tempPersons = this.state.persons.slice() // returns a copy
    const tempPersons = [ ...this.state.persons ]
    tempPersons.splice( personIndex, 1 )
    this.setState( { persons: tempPersons } )
  }

  nameChangedHandler = ( event, id ) => {
    const toUpdatedPersonIdx = this.state.persons.findIndex( person => person.id === id )
    const toUpdatedPerson = {
      ...this.state.persons[ toUpdatedPersonIdx ]
    }
    toUpdatedPerson.name = event.target.value

    const tempPersons = [ ...this.state.persons ]
    tempPersons[ toUpdatedPersonIdx ] = toUpdatedPerson

    this.setState( {
      persons: tempPersons,
    } )
  }

  togglePersonHandler = ( _ ) => {
    this.setState( {
      showPersonDiv: !this.state.showPersonDiv,
    } )
  }

  render () {
    console.log( 'render called in App.js' )

    const buttonStyle = {
      backgroundColor: 'lightblue',
      font: 'inherit',
      border: '5px groove aquamarine',
      padding: '8px',
      cursor: 'pointer',
      margin: '6px 10px'
    }

    let personDiv = null

    console.log( `personDiv is ${ personDiv }` )


    if ( this.state.showPersonDiv ) {
      personDiv = (
        <div>
          { this.state.persons.map( ( person, index ) => (
            <Person
              name={ person.name }
              age={ person.age }
              key={ person.id }
              clicked={ ( _ ) => this.switchPersonInfoHandler( 'Fancy Ashish' ) }
              deleteClicked={ () => this.deletePersonHandler( index ) }
              inputChanged={ ( event ) => this.nameChangedHandler( event, person.id ) }
            />
          ) ) }
        </div>
      )
    }

    return (
      <div className='App'>
        <h1>Hello from ashish</h1>
        <p style={ { color: 'red' } }>Another element within root app</p>

        <button onClick={ this.switchPersonInfoHandler.bind( this, 'Dancy Ashish' ) } style={ buttonStyle }>Switch Name</button>

        <button style={ buttonStyle } onClick={ this.togglePersonHandler }> { this.state.showPersonDiv ? 'Hide' : 'Show' } Person Div</button>

        {/* refer to https://react-cn.github.io/react/tips/if-else-in-JSX.html
        */}
        { personDiv }
      </div>
    )
    // return React.createElement(
    //   'div',
    //   { className: 'App' },
    //   React.createElement('h1', null, "Hi, I'm a React App!!!")
    // )
  }
}

export default App
