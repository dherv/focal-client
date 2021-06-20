import { FC } from 'react';
import { CheckIcon, ClockIcon, XCircleIcon } from '@heroicons/react/solid';

export const Session: FC<{
  memo: string;
  rating: number;
  date: string;
  focusName: string;
}> = ({ memo, rating, date, focusName }) => {
  return (
    <li className="list-item">
      <div
        className="list-item-content"
      >
        <p>{memo}</p>
        <p>{rating}</p>
        <p>{date}</p>
        <p>{focusName}</p>
      </div>
    </li>
  );
};
