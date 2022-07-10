import React, { createContext, useContext, useState } from 'react';
import UserAgeComp from './UserAgeComp';
import UserNameComp from './UserNameComp';

interface UserData {
  userName: string;
  userAge: number;
}

export const TestContext = createContext<UserData>({ userName: '', userAge: 0 });

const ContextTester = () => {
  const [userAge, setUserAge] = useState(20);
  const [localState, setLocalState] = useState(0);

  const onClickAge = () => {
    setUserAge(userAge + 1);
  };

  const onClickLocalState = () => {
    setLocalState(localState + 1);
  };

  return (
    <div>
      <button onClick={onClickAge}>Update age</button>
      <TestContext.Provider value={{ userName: 'abcdef', userAge }}>
        <UserAgeComp />
      </TestContext.Provider>

      <UserNameComp />
      <br />

      <button onClick={onClickLocalState}>Update local state</button>
      <div>{localState}</div>
    </div>
  );
};

export default ContextTester;
