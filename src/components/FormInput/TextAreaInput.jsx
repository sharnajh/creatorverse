import PropTypes from 'prop-types';
import InputDescription from './InputDescription';

const TextAreaInput = ({ handleChange, label, keyName, description, error, ...props }) => {
    return (
        <label>
            {label}
            <InputDescription error={error} description={description} />
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