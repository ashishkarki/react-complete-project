import React, { Component } from 'react'
//import Radium, { StyleRoot } from 'radium'
import styled from 'styled-components'

import './App.css'
import Person from './Person/Person.component'

const StyledButton = styled.button`
  background-color: ${props => props.buttonWhenPersonDisplayed ? 'lightpink' : 'lightgreen' };
  font: inherit;
  border: 5px groove aquamarine;
  padding: 8px;
  cursor: pointer;
  margin: 6px 10px;
  &:hover {
    background-color: ${props => props.buttonWhenPersonDisplayed ? 'Aquamarine' : 'skyblue' };
    color: brown;
  }
`

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
    //const tempPersons = this.state.persons.slice() // returns a copy
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
    // const buttonStyle = {
    //   backgroundColor: 'lightgreen',
    //   font: 'inherit',
    //   border: '5px groove aquamarine',
    //   padding: '8px',
    //   cursor: 'pointer',
    //   margin: '6px 10px',
    //   ':hover': {
    //     backgroundColor: 'skyblue',
    //     color: 'brown',
    //   }
    // }

    let personDiv = null

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

      // buttonStyle.backgroundColor = 'lightpink'
      // buttonStyle[ ':hover' ] = {
      //   backgroundColor: 'ghostwhite',
      //   color: 'black'
      // }
      // USING STYLED COMPONENTS
    }

    const classes = []
    if (this.state.persons.length <= 2) {
      classes.push('red')
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold')
    }

    return (
      //<StyleRoot>
      <div className='App'>
        <h1>Hello from ashish</h1>
        <p className={ classes.join(' ') }>Another element within root app</p>

        <StyledButton key={ 111 } onClick={ this.switchPersonInfoHandler.bind(this, 'Dancy Ashish') } >Switch Name</StyledButton>
        {/* style={ buttonStyle } */ }

        <StyledButton key={ 222 } buttonWhenPersonDisplayed={ this.state.showPersonDiv } onClick={ this.togglePersonHandler }> { this.state.showPersonDiv ? 'Hide' : 'Show' } Person Div</StyledButton>

        {/* refer to https://react-cn.github.io/react/tips/if-else-in-JSX.html
        */}
        { personDiv }
      </div>
      //</StyleRoot>
    )
    // return React.createElement(
    //   'div',
    //   { className: 'App' },
    //   React.createElement('h1', null, "Hi, I'm a React App!!!")
    // )
  }
}

// export default Radium( App )
export default App
