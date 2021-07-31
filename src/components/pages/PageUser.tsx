import { FC } from 'react';
import { useSelector } from 'react-redux';
import { getUser } from '../../features/user/userReducer';

export const PageUser: FC = () => {
  const user = useSelector(getUser);
  return user ? (
    <section>
      <h4 className="text-lg font-bold mb-2">profile</h4>
      <h1 className="my-2 font-thin">{user.name}</h1>
      <h5 className="my-2 font-thin">{user.email}</h5>
      <img
        className="rounded object-contain h-48"
        src={user.avatar}
        alt={user.name}
      ></img>
    </section>
  ) : null;
};
