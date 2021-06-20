import { FC } from 'react';
import { Session } from './Session';

export const SessionList: FC = () => {
  return (
    <ul>
      <Session
        memo="memo"
        rating={1}
        date="2021/07/01"
        focusName="take off"
      ></Session>
    </ul>
  );
};
