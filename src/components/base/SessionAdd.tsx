import React, { FC, useState } from 'react';
import { connect, RootStateOrAny } from 'react-redux';
import { Dispatch } from 'redux';
import { getAllFocuses } from '../../features/focus/focusReducer';
import { addSession } from '../../features/session/sessionAction';
import { IFocus } from '../../types/interfaces';
import { TextInput } from './TextInput';

const initialState = {
  memo: "",
  rating: 1,
  focusId: null,
};

const SessionAdd: FC<{ dispatch: Dispatch<any>; focuses: IFocus[] }> = ({
  dispatch,
  focuses,
}) => {
  const [state, setState] =
    useState<{ memo: string; rating: number; focusId: number | null }>(
      initialState
    );

  const handleChange = (
    event: React.ChangeEvent<
      HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
    >
  ) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const { memo, rating, focusId } = state;
    if (memo && rating && focusId) {
      dispatch(addSession({ memo, rating, focusId }));
    }
    setState(initialState);
  };

  console.log(focuses);
  return (
    <form className="mb-8 flex flex-col">
      <TextInput
        onChange={handleChange}
        placeholder="enter a memo"
        name="memo"
        label="enter a memo"
        value={state.memo}
        tag="textarea"
      />
      <div className="flex space-x-2 items-center mt-2">
        <select
          className="block mb-2 w-full shadow-md rounded p-2"
          value={state.rating}
          onChange={handleChange}
          name="rating"
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <select
          className="block mb-2 w-full shadow-md rounded p-2"
          value={state.focusId ?? ""}
          onChange={handleChange}
          name="focusId"
        >
          {focuses.map((focus) => (
            <option key={focus.id} value={focus.id}>
              {focus.text}
            </option>
          ))}
        </select>
      </div>
      <button onClick={handleClick} className="btn ml-auto">
        add
      </button>
    </form>
  );
};

const mapStateToProps = (state: RootStateOrAny) => {
  return {
    focuses: getAllFocuses(state, "all"),
  };
};

export default connect(mapStateToProps)(SessionAdd);
