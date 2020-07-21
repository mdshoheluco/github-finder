import React, { useReducer } from 'react'
import axios from 'axios'
import GithubContext from '../github/githubContext'
import GithubReducer from '../github/githubReducer'
import { SEARCH_USERS, SEARCH_USER, CLEAR_USER, SET_LOADING } from '../types'

let githubCleintId
let githubCleintSecret

if (process.env !== 'production') {
  githubCleintId = process.env.REACT_APP_GITHUB_CLIENT_ID
  githubCleintSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET
} else {
  githubCleintId = process.env.GITHUB_CLIENT_ID
  githubCleintSecret = process.env.GITHUB_CLIENT_SECRET
}

const GithubState = props => {
  const initialValue = {
    users: [],
    user: {},
    loading: false
  }

  const [state, dispatch] = useReducer(GithubReducer, initialValue)

  // Search users
  const searchUsers = async text => {
    setLoading()
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${githubCleintId}&client_secret=${githubCleintSecret}`
    )
    dispatch({
      type: SEARCH_USERS,
      payload: res.data.items
    })
  }

  // Search single user
  const getUser = async username => {
    setLoading()
    const res = await axios.get(`https://api.github.com/users/${username}`)
    dispatch({
      type: SEARCH_USER,
      payload: res.data
    })
  }

  // Clear user
  const clearUser = () => dispatch({ type: CLEAR_USER })

  // set loading
  const setLoading = () => dispatch({ type: SET_LOADING })

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        user: state.user,
        searchUsers,
        getUser,
        clearUser
      }}
    >
      {props.children}
    </GithubContext.Provider>
  )
}

export default GithubState
