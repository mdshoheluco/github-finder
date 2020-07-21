import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/layout/Navbar'
import Users from './components/users/Users'
import Search from './components/users/Search'
import Alert from './components/layout/Alert'
import About from './components/pages/About'
import User from './components/users/User'
import GithubState from './context/github/GithubState'

const App = () => {
  const [loading, setLoading] = useState([])
  const [alertMessage, setAlertMessage] = useState(null)

  const alertHandler = (msg, type) => {
    setAlertMessage({ msg, type })
    setTimeout(() => {
      setAlertMessage(null)
    }, 5000)
  }

  return (
    <GithubState>
      <Router>
        <React.Fragment>
          <Navbar icon='fa fa-github' title='Github Finder' />
          <div className='container'>
            <Switch>
              <Route
                path='/'
                exact
                render={props => (
                  <>
                    <Alert alert={alertMessage} />
                    <Search setAlert={alertHandler} />
                    <Users />
                  </>
                )}
              ></Route>
              <Route path='/about' exact component={About}></Route>
              <Route
                path='/user/:login'
                exact
                render={props => <User {...props} />}
              />
            </Switch>
          </div>
        </React.Fragment>
      </Router>
    </GithubState>
  )
}

export default App
