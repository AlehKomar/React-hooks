import { useState } from 'react'

const UseStateBasics = () => {
  // const value = useState('hello')[0]
  // const func = useState('hello')[1]
  // console.log(value)
  // console.log(func)
  const [count, setCount] = useState(0)
  const handleClick = () => {
    setCount((prev) => prev + 1)
  }
  return (
    <div>
      <h2>You clicked {count} times</h2>
      <button type='button' className='btn' onClick={handleClick}>
        Increase
      </button>
    </div>
  )
}

export default UseStateBasics
