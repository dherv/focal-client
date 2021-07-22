import { FC } from 'react';
import { CheckIcon, ClockIcon, XCircleIcon } from '@heroicons/react/solid';

export const Focus: FC<{
  name: string;
  completed: boolean;
  onClick: () => void;
  onDelete: () => void;
}> = ({ name, completed, onClick, onDelete }) => {
  return (
    <li className="list-item">
      <div className="list-item-content" onClick={onClick}>
        <p>{name}</p>
        {completed ? (
          <CheckIcon
            data-cy="focus-check-icon"
            className="hover:text-indigo-700 cursor-pointer h-4 w-4 ml-4 text-indigo-400"
          />
        ) : (
          <ClockIcon
            data-cy="focus-clock-icon"
            className="hover:text-indigo-700 cursor-pointer h-4 w-4 ml-4 text-indigo-400"
          />
        )}
      </div>
      <XCircleIcon
        onClick={onDelete}
        data-cy="focus-delete-icon"
        className="hover:text-indigo-700 cursor-pointer h-6 w-6 ml-4 text-indigo-500"
      />
    </li>
  );
};
