import { Dispatch, FC } from 'react';
import { connect } from 'react-redux';
import { addFocus } from '../features/focus/focusActions';

const AddFocus: FC<{ dispatch: Dispatch<any> }> = ({ dispatch }) => {
  let input: HTMLInputElement;
  const handelClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const text = input?.value 

    if(text) {
      dispatch(addFocus(text));
    }
    input.value = "";
  };
  return (
    <form className="mb-8">
      <label className="hidden font-regular " htmlFor="focus">
        enter focus
      </label>
      <input
        id="focus"
        className="border border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent rounded mr-3 shadow shadow-md px-3 py-1 text-gray-600 placeholder-gray-400"
        ref={(node: HTMLInputElement) => (input = node)}
        placeholder="enter a focus"
      ></input>
      <button
        onClick={handelClick}
        className="bg-indigo-600 px-3 py-1 rounded text-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-50"
      >
        add
      </button>
    </form>
  );
};

export default connect()(AddFocus);
