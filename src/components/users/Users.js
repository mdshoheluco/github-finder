import React from 'react'
import PropTypes from 'prop-types'
import UserItem from './UserItem'
import Spinner from '../layout/Spinner'
import GithubContext from '../../context/github/githubContext'
import { useContext } from 'react'
import Button from '../layout/Button'

const Users = () => {
  const githubContext = useContext(GithubContext)
  const { loading, users } = githubContext

  return (
    <div style={gridStyle}>
      {loading ? (
        <Spinner />
      ) : (
        users.map(user => <UserItem key={user.id} user={user} />)
      )}
    </div>
  )
}

Users.defaultProps = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
}

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'
}

export default Users
