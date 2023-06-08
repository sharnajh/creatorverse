import PropTypes from 'prop-types';

const TextInput = ({ handleChange, name, ...props }) => {
    return (
        <label>
            {name}
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