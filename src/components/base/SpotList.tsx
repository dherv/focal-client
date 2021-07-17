import { FC } from 'react';
import { connect, RootStateOrAny } from 'react-redux';
import { getAll } from '../../features/spot/spotReducer';
import { ISpot } from '../../types/interfaces';
import { Spot } from './Spot';

const SpotList: FC<{
  spots: ISpot[];
  error: string
}> = ({ spots, error }) => {
  console.log({spots})
  if(error) return <p>{error}</p>
  return (
    <ul>
      {spots.length > 0 && spots.map((s) => <Spot key={s.id} name={s.name} />)}
    </ul>
  );
};

const mapStateToProps = (state: RootStateOrAny) => {
  return {
    spots: getAll(state),
    error: state.spot.error
  };
};

// const mapDispatchToProps = (dispatch: any) => {
//   return {
//     onFocusClick: (f: IFocus) => dispatch(toggleFocus(f)),
//     onFocusDelete: (id: string) => dispatch(deleteFocus(id)),
//   };
// };

export default connect(mapStateToProps)(SpotList);
