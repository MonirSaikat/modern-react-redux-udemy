import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, fetchUsers } from '../store';
import Skeleton from './Skeleton';
import Button from './Button';
import UsersListItem from './UsersListItem';
import { useThunk } from '../hooks/use-thunk';

const UsersList = () => {
  const [doFetchUsers, isUsersLoading, usersLoadingError] = useThunk(fetchUsers);
  const [doAddUser, isAddingUser, addingUserError] = useThunk(addUser);
  const { data } = useSelector(state => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    doFetchUsers();
  }, []);

  const handleUserAdd = () => doAddUser();

  let content;
  if (isUsersLoading) content = <Skeleton times={4} className='h-10 w-full' />;
  else if (usersLoadingError) content = <div>{usersLoadingError.message}...</div>;
  else {
    content = data.map(user => {
      return (
        <UsersListItem
          key={user.id}
          user={user}
        />
      );
    });
  }

  return (
    <>
      <div className='flex flex-row justify-between m-3'>
        <h2 className="m-2 text-xl">Users</h2>
        <Button
          primary
          loading={isAddingUser}
          onClick={handleUserAdd}
        >
          Add User
        </Button>
      </div>
      { content }
    </>
  );
}

export default UsersList;
