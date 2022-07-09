import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { AppState } from './store/AppState';

const PostDisplay = React.memo(() => {
  const renderCount = useRef(0);
  console.log('rendering postdisplay', renderCount.current++);
  const post = useSelector((state: AppState) => state.post);

  if (!post) return null;

  return (
    <div>
      <p>title: {post.title}</p>
      <p>body: {post.body}</p>
    </div>
  );
});

export default PostDisplay;
