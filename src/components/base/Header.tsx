import { useDispatch } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';

export const Header = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  return (
    <header className="flex justify-between p-4">
      <NavLink to="/">
        <h2>Focal</h2>
      </NavLink>
      <nav className="space-x-3">
        <NavLink to="/spots">spots</NavLink>
        <NavLink to="/sessions">sessions</NavLink>
        <NavLink to="/focuses">focuses</NavLink>
        <button
          onClick={() => dispatch({ type: "LOGOUT", payload: { history } })}
        >
          logout
        </button>
      </nav>
    </header>
  );
};
