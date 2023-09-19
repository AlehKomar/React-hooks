import { useState } from 'react'

const UserChallenge = () => {
  const [user, setUser] = useState(null)

  const login = () => {
    setUser({ name: 'vegan food truck' })
  }

  const logout = () => {
    setUser(null)
  }
  console.log(user)
  let text = ''
  if (user) {
    text = `hello there, ${user.name}`
  }
  return (
    <div>
      {user ? (
        <UserDiv text={text} onClick={logout} buttonLabel='logout' />
      ) : (
        <UserDiv text='please login' onClick={login} buttonLabel='login' />
      )}
    </div>
  )
}

export default UserChallenge

const UserDiv = (prop) => {
  const { text, onClick, buttonLabel } = prop
  return (
    <div>
      <h4>{text}</h4>
      <button className='btn' onClick={onClick}>
        {buttonLabel}
      </button>
    </div>
  )
}
