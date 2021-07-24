import React, { Dispatch, FC, useState } from 'react';
import { connect } from 'react-redux';
import { ADD_FOCUS_REQUEST } from '../../actions';
import { TextInput } from './TextInput';

const AddFocus: FC<{ dispatch: Dispatch<any> }> = ({ dispatch }) => {
  const [focusText, setFocusText] = useState<string>("");

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFocusText(event.target.value);
  };

  const handelClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (focusText) {
      dispatch({ type: ADD_FOCUS_REQUEST, payload: focusText });
    }
    setFocusText("");
  };

  return (
    <form className="mb-8 flex items-center">
      <label className="hidden font-regular" htmlFor="focus">
        enter focus
      </label>
      <TextInput
        onChange={handleChange}
        placeholder="enter a focus"
        name="focus"
        label="enter a focus"
        value={focusText}
        tag="input"
      />
      <button onClick={handelClick} className="btn">
        add
      </button>
    </form>
  );
};

export default connect()(AddFocus);
