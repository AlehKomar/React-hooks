import { useState, useEffect } from 'react'

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <div>
      <button className='btn' onClick={() => setToggle(!toggle)}>
        toggle component
      </button>
      {toggle && <Component />}
    </div>
  )
}

export default CleanupFunction

const Component = () => {
  useEffect(() => {
    console.log('this is interesting')
  }, [])
  return <div>Second Component</div>
}
