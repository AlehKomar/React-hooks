import { useState, useEffect } from 'react'

const url = 'https://api.github.com/users'

const FetchData = () => {
  const [users, setUsers] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url)
        const users = await response.json()
        setUsers(users)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])
  console.log(users)
  return (
    <>
      <h2>fetch data example</h2>
      <ul>
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user
          return (
            <li key={id} style={{ marginBottom: '1rem' }}>
              <img
                src={avatar_url}
                style={{
                  maxWidth: '200px',
                  maxHeight: '200px',
                  borderRadius: '50%'
                }}
                alt={login}
              />
              <div>
                <h5>{login}</h5>
                <a href={html_url}>Profile</a>
              </div>
            </li>
          )
        })}
      </ul>
    </>
  )
}
export default FetchData
