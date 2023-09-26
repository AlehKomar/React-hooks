import React, { useState } from 'react'
import { data } from './../../../data'

const UseStateArray = () => {
  const [people, setPeople] = useState(data)

  const removePerson = (id) => {
    let newPeople = people.filter((person) => person.id !== id)
    setPeople(newPeople)
  }
  console.log(people.length)
  return people.length === 0 ? (
    <div>Пусто</div>
  ) : (
    <div>
      {people.map((person) => {
        const { id, name } = person
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button
              type='button'
              className='btn'
              onClick={() => removePerson(id)}
            >
              Remove
            </button>
          </div>
        )
      })}
      <button
        type='button'
        style={{ marginTop: '2rem' }}
        className='btn'
        onClick={() => setPeople([])}
      >
        Clear all
      </button>
    </div>
  )
}

export default UseStateArray
