import React, { FC } from 'react';

interface ScreenCProps {
  message: string;
}

const ScreenC: FC<ScreenCProps> = ({ message }) => {
  return <div>{message}</div>;
};

export default ScreenC;
