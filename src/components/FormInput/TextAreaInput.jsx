import PropTypes from 'prop-types';
import InputDescription from './InputDescription';

const TextAreaInput = ({ handleChange, label, keyName, ...props }) => {
    return (
        <label>
            {label}
            <InputDescription description="Provide a description of the creator. Who are they? What makes them interesting?" />
            <textarea
                onChange={e => handleChange(keyName, e.target.value)}
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