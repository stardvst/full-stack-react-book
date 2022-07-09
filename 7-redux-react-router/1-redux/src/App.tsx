import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import { USER_TYPE } from './store/UserReducer';

function App() {
  const [userId, setUserId] = useState('')
  const dispatch = useDispatch();

  const onChangeUserId = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const userIdInput = e.target.value ? e.target.value : '';
    console.log('user id:', userIdInput);
    setUserId(userIdInput);
    if (!userIdInput || userIdInput === '0' || isNaN(Number(userIdInput))) return;

    const userResponse = await fetch('https://jsonplaceholder.typicode.com/users');
    if (userResponse) {
      const users = await userResponse.json();
      console.log('users', users);
      const user = users.find((usr: any) => usr && usr.id === Number(userIdInput));
      console.log('user by id:', user);

      dispatch({
        type: USER_TYPE,
        payload: {
          id: user.id,
          username: user.username,
          email: user.email,
          city: user.address.city,
        },
      })
    }
  }

  return (
    <div className="App">
      <label htmlFor="userId">user id</label>:{' '}
      <input type="text" name='userId' value={userId} onChange={onChangeUserId} />
    </div>
  );
}

export default App;
