import React from 'react'
import './Person.styles.css'

const person = ( props ) =>
{
  return (
    <div className='Person'>
      <p onClick={ props.click }>
        This is a Person with { props.name } with age: { props.age }
      </p>
      <p>
        { props.children && <strong>. Children are: { props.children }</strong> }
      </p>

      <input type="text" onChange={ props.changed } value={ props.name } />
    </div>
  )
}

export default person
