import { FC, useEffect } from 'react';
import { connect, RootStateOrAny } from 'react-redux';
import { deleteFocus, fetchFocuses, toggleFocus } from '../actions';
import { getAllFocuses, getCurrentFilter } from '../reducer';
import { IFocus } from '../types/interfaces';
import { Focus } from './Focus';

const FocusList: FC<{
  focuses: IFocus[];
  onFocusClick: (id: number) => void;
  onFocusDelete: (id: number) => void;
  fetchFocuses: () => Promise<any>;
}> = ({ focuses, onFocusClick, onFocusDelete, fetchFocuses }) => {
  useEffect(() => {
    fetchFocuses();
  }, [fetchFocuses]);

  return (
    <ul>
      {focuses.map((f) => (
        <Focus
          key={f.id}
          text={f.text}
          completed={f.completed}
          onClick={() => onFocusClick(f.id)}
          onDelete={() => onFocusDelete(f.id)}
        />
      ))}
    </ul>
  );
};

const mapStateToProps = (state: RootStateOrAny) => {
  return {
    focuses: getAllFocuses(state, getCurrentFilter(state)),
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchFocuses: () => dispatch(fetchFocuses),
    onFocusClick: (id: number) => dispatch(toggleFocus(id)),
    onFocusDelete: (id: number) => dispatch(deleteFocus(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FocusList);
