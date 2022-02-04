import { camelCase } from 'lodash';

const Input = ({ name, label, ...rest }) => {
  const id = camelCase(name);

  return (
    <>
      {label && (
        <label htmlFor={id} data-testid="input-label">
          {label}
        </label>
      )}
      <input id={id} name={name} data-testid="input" {...rest} />
    </>
  );
};

export default Input;
