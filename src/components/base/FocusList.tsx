import { FC } from 'react';
import { connect, RootStateOrAny } from 'react-redux';
import {
  DELETE_FOCUS_REQUEST,
  UPDATE_FOCUS_REQUEST,
} from '../../features/focus/focusActions';
import {
  getAllFocuses,
  getCurrentFilter,
  getErrorMessage,
  getIsFetching,
} from '../../features/focus/focusReducer';
import { IFocus } from '../../types/interfaces';
import { Focus } from './Focus';

const FocusList: FC<{
  focuses: IFocus[];
  isFetching: boolean;
  errorMessage: string;
  onFocusClick: (f: IFocus) => void;
  onFocusDelete: (id: string) => void;
}> = ({ focuses, onFocusClick, onFocusDelete, isFetching, errorMessage }) => {
  if (isFetching && !focuses.length) {
    return <p>Loading...</p>;
  }

  if (errorMessage && !focuses.length) {
    return <p>Error, please refetch...</p>;
  }

  return (
    <ul>
      {focuses.length > 0 &&
        focuses.map((f) => (
          <Focus
            key={f.id}
            name={f.name}
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
    errorMessage: getErrorMessage(state),
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    onFocusClick: (focus: IFocus) =>
      dispatch({ type: UPDATE_FOCUS_REQUEST, payload: focus }),
    onFocusDelete: (id: string) =>
      dispatch({ type: DELETE_FOCUS_REQUEST, payload: id }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FocusList);
