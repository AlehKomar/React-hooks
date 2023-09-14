import { useState } from 'react'

const UseStateObject = () => {
  const person = { name: 'Peter', age: 25, hobby: 'running' }
  const [name, setName] = useState('Peter')
  const [age, setAge] = useState(25)
  const [hobby, setHobby] = useState('running')

  const changePerson = () => {
    setName('John')
    setAge(30)
    setHobby('racing')
  }
  return (
    <>
      <div>
        <h3>{name}</h3>
        <h3>{age}</h3>
        <h3>Enjoys: {hobby}</h3>
      </div>
      <div>
        <button type='button' className='btn' onClick={() => changePerson()}>
          Change
        </button>
      </div>
    </>
  )
}

export default UseStateObject
