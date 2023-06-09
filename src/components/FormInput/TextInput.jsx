import PropTypes from 'prop-types';
import InputDescription from './InputDescription';

const TextInput = ({ handleChange, name, description = null, ...props }) => {
    return (
        <label>
            {name}
            <InputDescription description={description} />
            <input
                type="text"
                onChange={e => handleChange(e.target.value)}
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