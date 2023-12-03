import { ReactElement } from 'react';

type InputCustomPropsType = {
  placeholder: string;
  JSXElement?: ReactElement;
  value: string | number | undefined;
};

export default function InputCustom(props: InputCustomPropsType) {
  const { placeholder, JSXElement = null, value } = props;

  return (
    <div className="input-custom">
      <label className="input-custom__label">
        <input
          type="text"
          placeholder={placeholder}
          className="input-custom__input"
          value={value}
        />
        {JSXElement}
      </label>
    </div>
  );
}

InputCustom.defaultProps = {
  JSXElement: null,
};
