import PropTypes from 'prop-types';
import InputDescription from './InputDescription';

const TextInput = ({ handleChange, label, keyName, description = null, ...props }) => {
    return (
        <label>
            {label}
            <InputDescription description={description} />
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
    name: PropTypes.string.isRequired
}

export default TextInput;