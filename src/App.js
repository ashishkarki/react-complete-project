import React, { useState } from 'react'
import './App.css'
import Person from './Person/Person'

const App = (props) => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'Ashish', age: 34 },
      { name: 'Puppy', age: 26 },
      { name: 'Puplet', age: 1 },
    ],
  })

  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        { name: 'Ashish Karki', age: 34 },
        { name: 'Dhuppy', age: parseInt(Math.random() * 100) },
        { name: 'Puplet', age: 100 },
      ],
    })
  }

  return (
    <div className='App'>
      <h1>Hello from ashish</h1>
      <p style={{ color: 'red' }}>Another element within root app</p>

      <button onClick={switchNameHandler}>Switch Name</button>

      {personsState.persons.map((value) => {
        return <Person name={value.name} age={value.age} key={value.name} />
      })}
    </div>
  )
}

export default App
