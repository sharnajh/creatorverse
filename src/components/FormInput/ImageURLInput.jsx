import PropTypes from 'prop-types';
import TextInput from './TextInput';
import { useEffect, useState } from 'react';

const ImageURLInput = ({ value, ...props }) => {
    const [validity, setValidity] = useState(true);

    const validateURL = async () => {
        if (value === "") {
            setValidity(undefined);
            return;
        }

        setValidity(value.match(/\.(jpeg|jpg|gif|png)$/) === null);
    }
    useEffect(() => {
        // validateURL();
    })
    return (
        <TextInput value={value} {...props} />
    )
}
ImageURLInput.propTypes = {
    value: PropTypes.string.isRequired,
}

export default ImageURLInput;