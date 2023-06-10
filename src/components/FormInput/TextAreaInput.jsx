import PropTypes from 'prop-types';
import InputDescription from './InputDescription';

const TextAreaInput = ({ handleChange, label, ...props }) => {
    return (
        <label>
            {label}
            <InputDescription description="Provide a description of the creator. Who are they? What makes them interesting?" />
            <textarea
                onChange={e => handleChange(e.target.value)}
                {...props}
            />
        </label>
    );
};
TextAreaInput.propTypes = {
    handleChange: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired
}

export default TextAreaInput;