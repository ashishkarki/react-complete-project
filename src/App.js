import React, { Component } from 'react'
import './App.css'
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: 'Ashish', age: 34 },
      { name: 'Puppy', age: 26 },
      { name: 'Puplet', age: 1 },
    ],
  }

  switchNameHandler = () => {
    this.setState({
      persons: [
        { name: 'Ashish Karki', age: 34 },
        { name: 'Dhuppy', age: 26 },
        { name: 'Puplet', age: 100 },
      ],
    })
  }

  render() {
    return (
      <div className='App'>
        <h1>Hello from ashish</h1>
        <p style={{ color: 'red' }}>Another element within root app</p>

        <button onClick={this.switchNameHandler}>Switch Name</button>

        {this.state.persons.map((value) => {
          return <Person name={value.name} age={value.age} key={value.name} />
        })}
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
