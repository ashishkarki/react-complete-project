import React from 'react'
import './Person.styles.css'

const person = (props) => {
  return (
    <div className='person-container'>
      <div>
        Thi is a Person with {props.name} with age: {props.age}
        {props.children && <strong>. Children are: {props.children}</strong>}
      </div>
    </div>
  )
}

export default person
