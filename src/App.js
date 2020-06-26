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
    showPersonDiv: false,
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

  togglePersonHandler = ( event ) =>
  {
    this.setState( {
      showPersonDiv: !this.state.showPersonDiv,
    } )
  }

  render ()
  {

    const buttonStyle = {
      backgroundColor: 'lightblue',
      font: 'inherit',
      border: '5px groove aquamarine',
      padding: '8px',
      cursor: 'pointer',
      margin: '6px 10px'
    }

    return (
      <div className='App'>
        <h1>Hello from ashish</h1>
        <p style={ { color: 'red' } }>Another element within root app</p>

        <button onClick={ this.switchPersonInfoHandler.bind( this, 'Dancy Ashish' ) } style={ buttonStyle }>Switch Name</button>

        <button style={ buttonStyle } onClick={ this.togglePersonHandler }> { this.state.showPersonDiv ? 'Hide' : 'Show' } Person Div</button>

        // refer to https://react-cn.github.io/react/tips/if-else-in-JSX.html
        { this.state.showPersonDiv ?
          <div>
            { this.state.persons.map( ( value, index ) => (
              <Person
                name={ value.name }
                age={ value.age }
                key={ index }
                click={ ( _ ) => this.switchPersonInfoHandler( 'Fancy Ashish' ) }
                changed={ this.nameChangedHandler }
              />
            ) ) }
          </div> : null
        }
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
