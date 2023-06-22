import PropTypes from 'prop-types';
import InputDescription from './InputDescription';

const TextAreaInput = ({ handleChange, label, keyName, description, ...props }) => {
    return (
        <label>
            {label}
            <InputDescription description={description} error={props["aria-invalid"] && "Missing required input"} />
            <textarea
                onChange={e => handleChange(keyName, e.target.value)}
                style={{ resize: "none" }}
                {...props}
            />
        </label>
    );
};
TextAreaInput.propTypes = {
    handleChange: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    keyName: PropTypes.string.isRequired
}

export default TextAreaInput;