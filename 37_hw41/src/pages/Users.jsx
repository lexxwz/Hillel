import React from 'react'
import UsersList from '../components/Users/UsersList'
import {Link} from 'react-router-dom'

export default function Users() {
  
  return (
    <div>
      <h2>Users list:</h2>
      <UsersList />
      <Link to='/createuser'>Create user</Link>
    </div>
  )
}