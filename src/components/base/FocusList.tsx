import { FC } from 'react';
import { connect, RootStateOrAny } from 'react-redux';
import { deleteFocus, toggleFocus } from '../../features/focus/focusActions';
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
}> = ({
  focuses,
  onFocusClick,
  onFocusDelete,
  isFetching,
  errorMessage,
}) => {
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
    errorMessage: getErrorMessage(state),
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    onFocusClick: (f: IFocus) => dispatch(toggleFocus(f)),
    onFocusDelete: (id: string) => dispatch(deleteFocus(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FocusList);
