import { FC } from 'react';

export const Spot: FC<{
  name: string;
}> = ({ name }) => {
  return (
    <li className="list-item">
      <div className="list-item-content">
        <p>{name}</p>
      </div>
    </li>
  );
};
