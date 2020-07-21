import React, { useState } from 'react'
import Button from '../layout/Button'
import { useContext } from 'react'
import GithubContext from '../../context/github/githubContext'

const Search = ({ setAlert }) => {
  const githubContext = useContext(GithubContext)
  const { users, clearUser } = githubContext
  const [text, setText] = useState('')
  const onChange = e => {
    setText(e.target.value)
  }

  const onSubmit = e => {
    e.preventDefault()
    if (text === '') {
      setAlert('Please enter something', 'light')
    } else {
      githubContext.searchUsers(text)
      setText('')
    }
  }

  return (
    <>
      <form className='form' onSubmit={onSubmit}>
        <input
          type='text'
          placeholder='Search Users...'
          name='text'
          value={text}
          onChange={onChange}
        />
        <Button text='Search' type='dark' />
      </form>
      {users.length > 0 && (
        <Button text='Clear' type='light' onclick={clearUser} />
      )}
    </>
  )
}

export default Search
