import React, { FC } from 'react';

type Props = {
  onChange: (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
  name: string;
  placeholder: string;
  value: string;
  label: string;
  tag: "textarea" | "input";
};

const Element: FC<any> = (props) =>
  React.createElement(props.tag, props) as React.ReactElement;

export const TextInput: FC<Props> = ({
  onChange,
  name,
  placeholder,
  value,
  label,
  tag = "input",
}) => {
  return (
    <>
      <label className="hidden font-regular" htmlFor={name}>
        {label}
      </label>
      <Element
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="form-element"
        tag={tag}
      ></Element>
    </>
  );
};
