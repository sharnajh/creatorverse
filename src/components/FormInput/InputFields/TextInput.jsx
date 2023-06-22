import PropTypes from 'prop-types';
import InputDescription from './InputDescription';

const TextInput = ({ handleChange, label, keyName, description = null, ...props }) => {
    return (
        <label>
            {label}
            <InputDescription description={description}
                error={props["aria-invalid"] && "Missing required input"} />
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