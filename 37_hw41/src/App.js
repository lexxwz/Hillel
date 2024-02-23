import './App.css';
import Users from './pages/Users';
import User from './pages/User';
import CreateUser from './pages/CreateUser';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { useState, useEffect } from 'react';
import UserContext from './context/UserContext'
import { getUsers } from './services/usersAPI';

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUsers().then(data => {setUsers(data)})
  }, [])
  
  return (
    <div className="App">
      <UserContext.Provider value={{users, setUsers}}>
        <Router>
          <Switch>
            <Route path='/' exact>
              <Users />
            </Route>
            <Route path='/createuser'>
              <CreateUser />
            </Route>
            <Route path='/:id'>
              <User/>
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;