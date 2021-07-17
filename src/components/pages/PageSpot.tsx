import AddSpot from '../base/AddSpot';
import SpotList from '../base/SpotList';

export const PageSpot = () => {
  return (
    <section>
    <h4 className="text-sm font-thin mb-2">add a spot</h4>
    <AddSpot />
    <div className="flex justify-between items-center mb-4">
      <h4 className="text-sm font-thin">spot list</h4>
    </div>
    <SpotList />
  </section>
  )
}