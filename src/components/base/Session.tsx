import { FC } from 'react';

export const Session: FC<{
  memo: string;
  rating: number;
  date: string;
  focusName: string;
}> = ({ memo, rating, date, focusName }) => {
  return (
    <li className="list-item">
      <div
        className="list-item-content flex-wrap"
      >
        <p className="w-full mb-2">{memo}</p>
        <p>{rating}</p>
        <p>{date}</p>
        <p>{focusName}</p>
      </div>
    </li>
  );
};
