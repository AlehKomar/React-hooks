import { useState } from 'react'

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'Peter',
    age: 25,
    hobby: 'running'
  })
  const [name, setName] = useState('Peter')
  const [age, setAge] = useState(25)
  const [hobby, setHobby] = useState('running')

  const changePerson = () => {
    setPerson({ name: 'John', age: 30, hobby: 'racing' })
    //setPerson({ ...person, hobby: 'racing' })
  }
  return (
    <>
      <div>
        <h3>{person.name}</h3>
        <h3>{person.age}</h3>
        <h3>Enjoys: {person.hobby}</h3>
      </div>
      <div>
        <button type='button' className='btn' onClick={changePerson}>
          Change
        </button>
      </div>
    </>
  )
}

export default UseStateObject
