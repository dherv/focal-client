import { FC } from 'react';
import { CheckIcon, ClockIcon, XCircleIcon } from '@heroicons/react/solid';

export const Focus: FC<{
  text: string;
  completed: boolean;
  onClick: () => void;
  onDelete: () => void
}> = ({ text, completed, onClick, onDelete }) => {
  return (
    <li className="list-item">
      <div
        className="list-item-content"
        onClick={onClick}
      >
        <p>{text}</p>
        {completed ? (
          <CheckIcon className="hover:text-indigo-700 cursor-pointer h-4 w-4 ml-4 text-indigo-400" />
        ) : (
          <ClockIcon className="hover:text-indigo-700 cursor-pointer h-4 w-4 ml-4 text-indigo-400" />
        )}
      </div>
      <XCircleIcon onClick={onDelete} className="hover:text-indigo-700 cursor-pointer h-6 w-6 ml-4 text-indigo-500" />
    </li>
  );
};
