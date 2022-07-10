import React, { FC, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

interface ScreenDProps {
  message: string;
}

const ScreenD: FC<ScreenDProps> = props => {
  const navigate = useNavigate();
  const { userid } = useParams();

  useEffect(() => {
    setTimeout(() => {
      navigate('/');
    }, 3000);
  });

  const onGoBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <p>{props.message}</p>
      <p>your id is {userid}</p>
      <button onClick={onGoBack}>go back</button>
    </div>
  );
};

export default ScreenD;
