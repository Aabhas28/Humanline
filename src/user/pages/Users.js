import React from 'react';
import UsersList from '../components/UserList';

const User = () => {
    const USERS = [
        {
        id: 'ul',
     name: 'Aabhas',
      image: 'https://imgs.search.brave.com/3e_lPTBjXoaNhrnEXeCQ8i1vaE8Kaz9qGRYq5DrACEQ/rs:fit:1129:1200:1/g:ce/aHR0cHM6Ly8zLmJw/LmJsb2dzcG90LmNv/bS9fRGUzSFVRLUE2/RUEvVFVnaVN4b0Za/T0kvQUFBQUFBQUFC/Wk0vRGxJTWlNdjh3/WTQvczE2MDAvYXVz/dGluK2ltZ2UrJTI1/MjgxNCUyNTI5Lmpw/Zw',
       place: 3
    }
    ]
    return <UsersList items = {USERS} />
};

export default User;