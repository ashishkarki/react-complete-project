import React from 'react'

import classes from './Person.styles.css'

const person = (props) => {
  const deleteButtonStyle = {
    backgroundColor: 'pink',
    border: '5px groove salmon',
    textTranform: 'uppercase',
    margin: '10px auto',
    display: 'block',
  }

  return (
    <div className={ classes.Person }>
      < p onClick={ props.clicked } >
        This is a Person with { props.name } with age: { props.age }.You can click on me to update the person information.
      </p >
      <p>
        { props.children && <strong>. Children are: { props.children }</strong> }
      </p>

      <input type="text" onChange={ props.inputChanged } value={ props.name } />

      <button style={ deleteButtonStyle } onClick={ props.deleteClicked }>Delete Me</button>
    </div>
  )
}

export default person
