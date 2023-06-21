import PropTypes from 'prop-types';
import InputDescription from './InputDescription';

const TextInput = ({ handleChange, label, keyName, error, description = null, ...props }) => {
    return (
        <label>
            {label}
            <InputDescription error={error} description={description} />
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