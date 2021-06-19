import { FC } from 'react';

export const Filter: FC<{
  filter: string;
  currentFilter: string;
  onClick: (filter: string) => void;
}> = ({ filter, currentFilter, onClick }) => {
  const active = currentFilter === filter;
  const background = active ? "bg-indigo-500" : "bg-indigo-200";
  const color = active ? "text-white" : "text-indigo-600";
  const classes = `transition-colors duration-500 text-center mx-2 text-center px-4 py-0.5 rounded cursor-pointer ${background} ${color}`;
  return (
    <li className={classes} onClick={() => onClick(filter)}>
      {filter}
    </li>
  );
};
