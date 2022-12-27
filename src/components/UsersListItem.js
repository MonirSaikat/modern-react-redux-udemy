import Button from './Button';

function UsersListItem({ user }) {
  const handleRemove = () => {

  };

  return (
    <div className='mb-2 border rounded'>
      <span>{user.name}</span>
      <div className='flex p-2 justify-between items-center'>
        <Button onClick={handleRemove} danger>delete</Button>
      </div>
    </div>
  );
};

export default UsersListItem;
