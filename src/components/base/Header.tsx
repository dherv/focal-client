import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import { getUser } from '../../features/user/userReducer';

export const Header = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector(getUser);
  return (
    <header className="flex justify-between p-4">
      <NavLink to="/">
        <h2>Focal</h2>
      </NavLink>
      <nav className="space-x-3 font-thin">
        <NavLink to="/spots">spots</NavLink>
        <NavLink to="/sessions">sessions</NavLink>
        <NavLink to="/focuses">focuses</NavLink>

        <NavLink to="/profile">
          <img
            className="inline object-cover w-8 h-8 ml-2 rounded-full"
            src={user?.avatar}
            alt={`avatar of friend: ${user?.name}`}
          />
        </NavLink>
        <button
          className="btn-light"
          onClick={() => dispatch({ type: "LOGOUT", payload: { history } })}
        >
          logout
        </button>
      </nav>
    </header>
  );
};
