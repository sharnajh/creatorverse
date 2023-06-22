import PropTypes from 'prop-types';
import InputDescription from './InputDescription';
import { useState } from 'react';

const TextInput = ({ handleChange, label, keyName, description = null, ...props }) => {
    const [touched, setTouched] = useState(false);
    return (
        <label>
            {label}
            <InputDescription description={description} error={props["aria-invalid"] && "Missing required input"} />
            {touched && "TOUCHED!!!!"}
            <input
                type="text"
                onChange={e => handleChange(keyName, e.target.value)}
                {...props}
            />
        </label>
    );
};
TextInput.propTypes = {
    handleChange: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    keyName: PropTypes.string.isRequired
}

export default TextInput;