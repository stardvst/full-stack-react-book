import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import { USER_TYPE } from './store/UserReducer';
import UserDisplay from './UserDisplay';
import { POST_TYPE } from './store/PostReducer';
import PostDisplay from './PostDisplay';

function App() {
  const [userId, setUserId] = useState('');
  const [postId, setPostId] = useState('');
  const dispatch = useDispatch();

  const onChangeUserId = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const userIdInput = e.target.value ? e.target.value : '';
    console.log('user id:', userIdInput);
    setUserId(userIdInput);
    if (!userIdInput || userIdInput === '0' || isNaN(Number(userIdInput))) {
      dispatch({
        type: USER_TYPE,
        payload: null,
      });
      return;
    }

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
      });
    }
  };

  const onChangePostId = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const postIdInput = e.target.value ? e.target.value : '';
    console.log('user id:', postIdInput);
    setPostId(postIdInput);
    if (!postIdInput || postIdInput === '0' || isNaN(Number(postIdInput))) {
      dispatch({
        type: POST_TYPE,
        payload: null,
      });
      return;
    }

    const postResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${postIdInput}`);
    if (postResponse) {
      const post = await postResponse.json();
      console.log('post by id:', post);

      dispatch({
        type: POST_TYPE,
        payload: {
          id: post.id,
          title: post.title,
          body: post.body,
        },
      });
    }
  };

  return (
    <div className="App">
      <div>
        <label htmlFor="userId">user id</label>:{' '}
        <input type="text" name="userId" value={userId} onChange={onChangeUserId} />
        <UserDisplay />
      </div>
      <div>
        <label htmlFor="userId">post id</label>:{' '}
        <input type="text" name="postId" value={postId} onChange={onChangePostId} />
        <PostDisplay />
      </div>
    </div>
  );
}

export default App;
