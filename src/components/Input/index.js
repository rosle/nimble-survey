import { capitalize } from 'lodash';

const Input = ({ object, name, label, ...rest }) => {
  const input_id = object ? `${object}${capitalize(name)}` : name;
  const input_name = object ? `${object}[${name}]` : name;

  return (
    <>
      {label && <label htmlFor={input_id}>{label}</label>}
      <input id={input_id} name={input_name} {...rest} />
    </>
  );
};

export default Input;
