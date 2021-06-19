import AddFocus from './components/AddFocus';
import Filters from './components/Filters';
import FocusList from './components/FocusList';

function App() {
  return (
    <div className="h-screen	 bg-indigo-100">
      <header className="flex justify-between p-4">
        <h2>Focal</h2>
        <nav className="space-x-3">
          <a href="/">sessions</a>
          <a href="/">focuses</a>
        </nav>
      </header>

      <main className="container max-w-3xl mx-auto  p-4">
        <h4 className="text-sm font-thin mb-2">add a focus</h4>
        <AddFocus />
        <div className="flex justify-between items-center  mb-4">
          <h4 className="text-sm font-thin">focus list</h4>
          <Filters />
        </div>

        <FocusList />
      </main>
    </div>
  );
}

export default App;
