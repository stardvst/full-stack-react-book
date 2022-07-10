import React, { useContext, useRef } from 'react';

const UserNameComp = React.memo(() => {
  const renders = useRef(0);
  console.log(`UserNameComp rendered ${renders.current++} times`);

  const userName = 'abcdef'; //useContext(TestContext);
  return <div>{userName}</div>;
});

export default UserNameComp;
