import React, { useContext } from 'react'
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import UserContext from '../../context/UserContext';
import { patchUser } from '../../services/usersAPI';

export default function EditUserForm() {
  const {users, setUsers} = useContext(UserContext);
  const userId = useParams();
  const hist = useHistory();

  let currentUser = users.filter(user => user.id === +userId.id);
  currentUser = currentUser[0];
  const user = {
    Name: currentUser.name,
    Username: currentUser.username,
    Email: currentUser.email,
    City: currentUser.address.city,
    Street: currentUser.address.street,
  };

  const EventHandler = function (event) {
    event.preventDefault();
    patchUser(userId.id, event.target.className, event.target[0].value)
        .then(data => users.map(user => user.id === +userId.id ? data : user))
        .then(data => setUsers(data))
        .then(() => hist.push('/'))
  }

  return (
    <div className='edit'>
      {Object.keys(user).map(key => (
        <form key={key} className={key.toLowerCase()} onSubmit={EventHandler}>
            <label>{key}
                <input type="text" defaultValue={user[key]}/>
                <button>Save</button>
                <button onClick={() => hist.push('/')}>Cancel</button>
            </label>
        </form>
      ))}
    </div>
  )
}
