import React, { useContext, useEffect } from 'react'
import UserContext from '../../context/UserContext';
import { Link } from 'react-router-dom';
import { deleteUsers } from '../../services/usersAPI';

export default function UsersList() {
  const {users, setUsers} = useContext(UserContext);

  useEffect(() => {
    setUsers(users)
  }, [users])

  const deleteUser = (id) => {
    deleteUsers(id)
      .then(() => setUsers(users.filter(user => user.id !== +id)))
  }

  return (
    <div>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <span>{user.name}</span>
            <Link to={`/${user.id}`}><button>Edit</button></Link>
            <button onClick={() => deleteUser(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}