import React, { FC, useState } from 'react';
import { connect, RootStateOrAny } from 'react-redux';
import { Dispatch } from 'redux';
import { ADD_SESSION_REQUEST } from '../../actions';
import { getAllFocuses } from '../../features/focus/focusReducer';
import { getAll } from '../../features/spot/spotReducer';
import { IFocus, ISpot } from '../../types/interfaces';
import { TextInput } from './TextInput';

const initialState = {
  memo: "",
  rating: 1,
  focusId: undefined,
  spotId: undefined,
};

const SessionAdd: FC<{
  dispatch: Dispatch<any>;
  focuses: IFocus[];
  spots: ISpot[];
}> = ({ dispatch, focuses, spots }) => {
  const [state, setState] = useState<{
    memo: string;
    rating: number;
    focusId: string | undefined;
    spotId?: string;
  }>(initialState);

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
    const { memo, rating, focusId, spotId } = state;
    console.log(memo, rating, focusId);
    if (memo && rating && focusId && spotId) {
      dispatch({
        type: ADD_SESSION_REQUEST,
        payload: { memo, rating, focusId, spotId },
      });
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
          placeholder="select a rating"
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
          placeholder="select a focus"
        >
          <option value={undefined}>Please choose a focus</option>
          {focuses.map((focus) => (
            <option key={focus.id} value={focus.id}>
              {focus.name}
            </option>
          ))}
        </select>
        <select
          className="block mb-2 w-full shadow-md rounded p-2"
          value={state.spotId ?? ""}
          onChange={handleChange}
          name="spotId"
          placeholder="select a spot"
        >
          <option value={undefined}>Please choose a spot</option>
          {spots.map((spot: ISpot) => (
            <option key={spot.id} value={spot.id}>
              {spot.name}
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
    spots: getAll(state),
  };
};

export default connect(mapStateToProps)(SessionAdd);
