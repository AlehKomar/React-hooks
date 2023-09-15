import { useState } from 'react'

const UseStateGotcha = () => {
  const [value, setValue] = useState(0)
  const handleClick = () => {
    setValue((currentState) => {
      const newState = currentState + 1
      console.log(newState)
      return newState
    })

    // setTimeout(() => {
    //   console.log('fff')
    //   setValue((currentState) => {
    //     return currentState + 1
    //   })
    // }, 1000)
  }
  return (
    <>
      <h2>{value}</h2>
      <button type='button' className='btn' onClick={handleClick}>
        Increase
      </button>
    </>
  )
}

export default UseStateGotcha
