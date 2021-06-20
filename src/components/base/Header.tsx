import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <header className="flex justify-between p-4">
      <NavLink to="/"><h2>Focal</h2></NavLink>
      <nav className="space-x-3">
        <NavLink to="/sessions">sessions</NavLink>
        <NavLink to="/focuses">focuses</NavLink>
      </nav>
    </header>
  );
};
