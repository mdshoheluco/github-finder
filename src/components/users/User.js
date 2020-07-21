import React, { useEffect } from 'react'
import Spinner from '../layout/Spinner'
import { Link } from 'react-router-dom'
import { useContext } from 'react'

import GithubContext from '../../context/github/githubContext'

const User = props => {
  const githubContext = useContext(GithubContext)
  const { getUser, loading, user } = githubContext
  console.log(githubContext)
  useEffect(() => {
    getUser(props.match.params.login)
  }, [])
  const {
    name,
    login,
    avatar_url,
    html_url,
    location,
    hireable,
    public_repos,
    public_gists,
    following,
    followers
  } = user

  if (loading) {
    return <Spinner />
  }
  return (
    <div>
      <Link to='/' className='btn btn-dark'>
        Back to Search
      </Link>
      <img
        src={avatar_url}
        alt={name}
        style={{ width: '200px', display: 'block', marginTop: '20px' }}
        className='round-img'
      />
      <p>{name}</p>
      <p>
        <strong>Location: </strong>
        {location}
      </p>
      <p>
        <strong>Public Repos: </strong>
        {public_repos}
      </p>
      <a href={html_url}>Login</a>
    </div>
  )
}

export default User
