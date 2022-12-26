import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, fetchUsers } from '../store';
import Skeleton from './Skeleton';
import Button from './Button';

const UsersList = () => {
  const [isUsersLoading, setIsUsersLoading] = useState(false);
  const [usersLoadingError, setUsersLoadingError] = useState(null);
  const [isAddingUser, setIsAddingUser] = useState(false);
  const [addingUserError, setAddingUserError] = useState(null);
  const { data } = useSelector(state => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsUsersLoading(true);
    dispatch(fetchUsers())
      .unwrap()
      .catch((err) => setUsersLoadingError(err))
      .finally(() => setIsUsersLoading(false));
  }, []);

  const handlUserAdd = () => {
    setIsAddingUser(true);
    dispatch(addUser())
      .unwrap()
      .catch(err => setAddingUserError(err))
      .finally(() => setIsAddingUser(false));
  };

  const skeleton = <Skeleton times={4} className='h-10 w-full' />
  if (usersLoadingError) return <div>{usersLoadingError.message}...</div>;

  const renderedUsers = data.map(user => {
    return <div key={user.id} className='mb-2 border rounded '>
      <div className='flex p-2 justify-between items-center cursor-pointer'>
        {user.name}
      </div>
    </div>
  });

  return (
    <div>
      <div className='flex flex-row justify-between m-3'>
        <h2 className="m-2 text-xl">Users</h2>
        <Button primary onClick={handlUserAdd}>
          {isAddingUser ? 'adding': 'not adding'} Add User
        </Button>
      </div>
      { isUsersLoading ? skeleton :  renderedUsers }
    </div>
  );
}

export default UsersList;
