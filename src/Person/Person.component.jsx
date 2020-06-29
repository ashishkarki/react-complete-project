import React from 'react'
// import Radium from 'radium'
import styled from 'styled-components'

import './Person.styles.css'

const StyledPersonDiv = styled.div`
  width:  60%;
  margin: 10px auto;
  border:  2px solid blanchedalmond;
  padding: 12px;
  text-align: center;
  box-shadow: 5px 2px 6px rgb(228, 189, 189);

  @media (min-width: 700px) {
    background-color: blanchedalmond;
  }
    `

const person = (props) => {
  const deleteButtonStyle = {
    backgroundColor: 'pink',
    border: '5px groove salmon',
    textTranform: 'uppercase',
    margin: '10px auto',
    display: 'block',
  }

  // const radiumPersonStyle = {
  //   '@media (min-width: 700px)': {
  //     width: '450px',
  //     backgroundColor: 'rgb(103, 197, 185)',
  //   }
  // }

  return (
    //<div className='Person' style={ radiumPersonStyle }>
    <StyledPersonDiv>
      < p onClick={ props.clicked } >
        This is a Person with { props.name } with age: { props.age }.You can click on me to update the person information.
      </p >
      <p>
        { props.children && <strong>. Children are: { props.children }</strong> }
      </p>

      <input type="text" onChange={ props.inputChanged } value={ props.name } />

      <button style={ deleteButtonStyle } onClick={ props.deleteClicked }>Delete Me</button>
    </StyledPersonDiv>
    //</div >
  )
}

//export default Radium( person )
export default person
