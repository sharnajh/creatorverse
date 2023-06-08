import PropTypes from 'prop-types';

const TextAreaInput = ({ handleChange, name, ...props }) => {
    return (
        <label>
            {name}
            <textarea
                onChange={e => handleChange(e.target.value)}
                {...props}
            />
        </label>
    );
};
TextAreaInput.propTypes = {
    handleChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired
}

export default TextAreaInput;