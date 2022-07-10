import React, { useContext } from 'react';
import { TestContext } from './ContextTester';

const UserAgeComp = () => {
  const { userAge } = useContext(TestContext);
  return <div>{userAge}</div>;
};

export default UserAgeComp;
