import React, { Dispatch, FC, useState } from 'react';
import { connect } from 'react-redux';
import { addFocus } from '../../features/focus/focusActions';
import { ADD_SPOT_REQUEST } from '../../features/spot/spotSaga';
import { TextInput } from './TextInput';

const AddSpot: FC<{ dispatch: Dispatch<any> }> = ({ dispatch }) => {
  const [spotText, setSpotText] = useState<string>("");

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setSpotText(event.target.value);
  };

  const handelClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (spotText) {
      dispatch({type: ADD_SPOT_REQUEST, payload: spotText});
    }
    setSpotText("");
  };

  return (
    <form className="mb-8 flex items-center">
      <label className="hidden font-regular" htmlFor="spot">
        enter spot
      </label>
      <TextInput
        onChange={handleChange}
        placeholder="enter a spot"
        name="spot"
        label="enter a spot"
        value={spotText}
        tag="input"
      />
      <button
        onClick={handelClick}
        className="btn"
      >
        add
      </button>
    </form>
  );
};

export default connect()(AddSpot);
