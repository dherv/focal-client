import { FC, useEffect } from 'react';
import { connect, RootStateOrAny } from 'react-redux';
import { deleteFocus, fetchFocuses, toggleFocus } from '../actions';
import {
  getAllFocuses,
  getCurrentFilter,
  getErrorMessage,
  getIsFetching,
} from '../reducers';
import { IFocus } from '../types/interfaces';
import { Focus } from './Focus';

const FocusList: FC<{
  focuses: IFocus[];
  isFetching: boolean;
  errorMessage: string;
  onFocusClick: (f: IFocus) => void;
  onFocusDelete: (id: number) => void;
  fetchFocuses: () => Promise<any>;
}> = ({ focuses, onFocusClick, onFocusDelete, fetchFocuses, isFetching, errorMessage }) => {
  useEffect(() => {
    fetchFocuses();
  }, [fetchFocuses]);

  if (isFetching && !focuses.length) {
    return <p>Loading...</p>;
  }

  if (errorMessage && !focuses.length) {
    return <p>Error, please refetch...</p>;
  }

  return (
    <ul>
      {focuses.length > 0 && focuses.map((f) => (
        <Focus
          key={f.id}
          text={f.text}
          completed={f.completed}
          onClick={() => onFocusClick(f)}
          onDelete={() => onFocusDelete(f.id)}
        />
      ))}
    </ul>
  );
};

const mapStateToProps = (state: RootStateOrAny) => {
  return {
    focuses: getAllFocuses(state, getCurrentFilter(state)),
    isFetching: getIsFetching(state),
    errorMessage: getErrorMessage(state)
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchFocuses: () => dispatch(fetchFocuses),
    onFocusClick: (f: IFocus) => dispatch(toggleFocus(f)),
    onFocusDelete: (id: number) => dispatch(deleteFocus(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FocusList);
