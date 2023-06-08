import PropTypes from 'prop-types';
import LinkInput from './LinkInput';
import { useState } from 'react';

const SocialMediaInput = () => {
    const [inputEls, setInputEls] = useState([]);

    const addInput = () => {
        setInputEls(prev =>
            [...prev,
            <LinkInput key={prev.length + 1} onClick={() => rmInput(prev.length + 1)} />])
    }

    const rmInput = (key) => {
        setInputEls(prev => prev.filter((el) => el.key != key))
    }
    return (
        <>
            {inputEls}
            <button type="button" onClick={addInput}>+</button>
        </>
    )
}
SocialMediaInput.propTypes = {
    handleChange: PropTypes.func.isRequired,
}

export default SocialMediaInput;