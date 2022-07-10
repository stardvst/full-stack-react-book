import React, { useContext, useRef } from 'react';
import { TestContext } from './ContextTester';

const UserNameComp = React.memo(() => {
  const renders = useRef(0);
  console.log(`UserNameComp rendered ${renders.current++} times`);

  const { userName } = useContext(TestContext);
  return <div>{userName}</div>;
});

export default UserNameComp;
