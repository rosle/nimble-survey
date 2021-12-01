const FormError = ({ errors }) => {
  if (errors.length === 0) {
    return null;
  }

  return (
    <div className="form__error">
      <div className="form__error-title">Error</div>
      <ul>
        {errors.map((error, index) => (
          <li key={index} data-testid="form-error-list-item">
            {error.detail}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FormError;
