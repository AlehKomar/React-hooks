import { useState } from 'react'

const ErrorExample = () => {
  let count = 0

  const handleClick = () => {
    count = count + 1
    console.log(count)
  }
  return (
    <div>
      <h2>useState error example</h2>
      <h1>{count}</h1>
      <button type='button' className='btn' onClick={handleClick}>
        increase
      </button>
    </div>
  )
}

export default ErrorExample
