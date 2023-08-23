import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '../store/users/usersSlice';

const Users = () => {
  const dispatch = useDispatch();
  const { users, isLoading, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (isLoading) {
    return <div>Chargement en cours...</div>;
  }

  if (error) {
    return <div>Erreur : {error}</div>;
  }

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {user.firstName} {user.lastName}
        </li>
      ))}
    </ul>
  );
};

export default Users;
