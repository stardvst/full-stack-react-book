import { useSelector } from 'react-redux';
import { AppState } from './store/AppState';

const UserDisplay = () => {
  const user = useSelector((state: AppState) => state.user);
  console.log('rendering userdisplay');

  if (!user) return null;

  console.log('user', user);
  return (
    <div>
      <p>username: {user.username}</p>
      <p>email: {user.email}</p>
      <p>city: {user.city}</p>
    </div>
  );
};

export default UserDisplay;
