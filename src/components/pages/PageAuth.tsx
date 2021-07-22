import { ChangeEvent, FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_MUTATION, SIGNUP_MUTATION } from '../../graphql/mutations';
import { TemplateAuth } from '../templates/TemplateAuth';

const initialState = {
  login: true,
  email: "",
  password: "",
  name: "",
};
export const PageAuth: FC = () => {
  const history = useHistory();
  const [formState, setFormState] = useState(initialState);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    console.log(history, formState.login);
    const { name, email, password } = formState;
    formState.login
      ? dispatch({
          type: "LOGIN_REQUEST",
          payload: { email, password, history },
        })
      : dispatch({
          type: "SIGNUP_REQUEST",
          payload: { name, email, password, history },
        });
  };

  const handleChange = (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <TemplateAuth>
      <section>
        <form>
          {!formState.login ? (
            <>
              <label htmlFor="name">name</label>
              <input
                className="input-text"
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
              ></input>
            </>
          ) : null}
          <label htmlFor="email">email</label>
          <input
            className="input-text"
            id="email"
            name="email"
            value={formState.email}
            onChange={handleChange}
          ></input>
          <label htmlFor="password">password</label>
          <input
            className="input-text"
            id="password"
            name="password"
            value={formState.password}
            onChange={handleChange}
          ></input>
        </form>
        <button onClick={handleSubmit}>
          {formState.login ? "login" : "signup"}
        </button>
        <button
          onClick={() =>
            setFormState({ ...formState, login: !formState.login })
          }
        >
          {formState.login ? "need an account" : "already have an account?"}
        </button>
      </section>
    </TemplateAuth>
  );
};
