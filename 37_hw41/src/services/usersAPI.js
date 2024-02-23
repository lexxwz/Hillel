const API = 'https://jsonplaceholder.typicode.com/users';

export const getUsers = () => fetch(API).then(response => response.json());

export const createUser = (user) => fetch(API, {
  method: 'POST',
  body: JSON.stringify({
    name: user.name,
    username: user.username,
    email: user.email,
    address: {
      city: user.city,
      street: user.street,
    },
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
}).then((response) => response.json())

export const patchUser = (id, field, value) => fetch(`${API}/${id}`, {
  method: 'PATCH',
  body: JSON.stringify({
    [field]: value,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
}).then((response) => response.json())
  
export const deleteUsers = (id) => fetch((`${API}/${id}`), {method: 'DELETE'});