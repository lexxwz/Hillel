import React from 'react'
import { useContext } from "react";
import UserContext from '../../context/UserContext';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { createUser } from '../../services/usersAPI';

export default function CreateUserForm() {
  const {users, setUsers} = useContext(UserContext);
  const hist = useHistory();

  const EventHandler = function (event) {
    event.preventDefault();

    const newUser = {
      name: event.target.name.value,
      username: event.target.username.value,
      email: event.target.email.value,
      city: event.target.city.value,
      street: event.target.street.value,
    };
  
    createUser(newUser)
      .then(data => setUsers([...users, data]))
      .then(() => console.log(users))
      .then(() => hist.push('/'))    
  }

  return (
    <div>
      <form onSubmit={EventHandler}>
        <label>Name<input type="text" name='name'/></label>
        <label>Username<input type="text" name='username'/></label>
        <label>Email<input type="text" name='email'/></label>
        <label>City<input type="text" name='city'/></label>
        <label>Street<input type="text" name='street'/></label>
        <button>Create user</button>
      </form>
    </div>
  )
}