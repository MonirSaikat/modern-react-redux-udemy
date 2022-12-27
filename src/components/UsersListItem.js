import Button from './Button';
import { useThunk } from '../hooks/use-thunk';
import { GoTrashcan } from 'react-icons/go';
import { removeUser } from '../store';

function UsersListItem({ user }) {
  const [doRemoveUser, isRemovingUser, removeUserError] = useThunk(removeUser);
  const handleRemove = () => {
    doRemoveUser(user);
  };

  return (
    <div className='mb-2 border rounded'>
      <div className='flex p-2 items-center justify-start'>
        <Button
          className='mr-3'
          loading={isRemovingUser}
          onClick={handleRemove}
        >
          <GoTrashcan />
        </Button>
        <span>{user.name}</span>
      </div>
    </div>
  );
};

export default UsersListItem;
