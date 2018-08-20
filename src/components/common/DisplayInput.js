import React, {PropTypes} from 'react';

const DisplayInput = ({name, label, placeholder, value }) => {
  let wrapperClass = 'form-group';

  return (
    <div className={wrapperClass}>
      <label htmlFor={name}>{label}</label>
      <div className="field">
        <input
          type="text"
          name={name}
          readOnly
          className="form-control-plaintext"
          placeholder={placeholder}
          value={value}/>
      </div>
    </div>
  );
};

DisplayInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string
};

export default DisplayInput;
