import React, { useState, useEffect, Fragment } from 'react'
import './index.scss'

function Form () {
  // 1. Use the name state variable
  const [name, setName] = useState('1')

  // 2. Use an effect for persisting the form
  // useEffect(function persistForm () {
  //   localStorage.setItem('formData', name)
  // })

  // 3. Use the surname state variable
  const [surname, setSurname] = useState('3')

  // 4. Use an effect for updating the title
  useEffect(function updateTitle () {
    console.log('useEffect2=', name)
    document.title = name + ' ' + surname
    // setName('name2')
  })

  function changeName () {
    const tmp = name + 1
    setName(tmp)
  }

  // ...
  return (
    <div>
      <button onClick={changeName}>点击{name}</button>
      <div className='box1'>1
        <div className='box2'>2</div>
      </div>
    </div>
  )
}

export default Form
