import React, { Component } from 'react'
import './App.css'
import Person from './Person/Person.component'

class App extends Component
{
  state = {
    persons: [
      { name: 'Ashish', age: 34 },
      { name: 'Puppy', age: 26 },
      { name: 'Puplet', age: 1 },
    ],
  }

  switchPersonInfoHandler = ( someName ) =>
  {
    this.setState( {
      persons: [
        { name: someName, age: 34 },
        { name: 'Dhuppy', age: Math.round( Math.random() * 100, 0 ) },
        { name: 'Puplet', age: 100 },
      ],
    } )
  }

  nameChangedHandler = ( event ) =>
  {
    this.setState( {
      persons: [
        { name: event.target.value, age: 54 },
        { name: 'random guy', age: Math.round( Math.random() * 100, 0 ) },
        { name: 'Puplet', age: 1 },
      ],
    } )
  }

  render ()
  {
    return (
      <div className='App'>
        <h1>Hello from ashish</h1>
        <p style={ { color: 'red' } }>Another element within root app</p>

        <button onClick={ this.switchPersonInfoHandler.bind( this, 'Dancy Ashish' ) }>Switch Name</button>

        { this.state.persons.map( ( value, index ) => (
          <Person
            name={ value.name }
            age={ value.age }
            key={ index }
            click={ ( _ ) => this.switchPersonInfoHandler( 'Fancy Ashish' ) }
            changed={ this.nameChangedHandler }
          />
        ) ) }
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
