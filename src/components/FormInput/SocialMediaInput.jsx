import PropTypes from 'prop-types';
import LinkInput from './LinkInput';
import { useState } from 'react';

const SocialMediaInput = () => {
    const [inputEls, setInputEls] = useState([]);

    const addInput = () => {
        const index = inputEls.length + 1;
        setInputEls([...inputEls,
            <LinkInput key={index} handleRm={() => rmInput(index)} />])
    }

    const rmInput = (key) => {
        setInputEls(prev => prev.filter((el) => el.key != key))
    }
    return (
        <>
            <LinkInput key={0} />
            {inputEls}
            <button type="button" onClick={addInput}>+</button>
        </>
    )
}
SocialMediaInput.propTypes = {
    handleChange: PropTypes.func.isRequired,
}

export default SocialMediaInput;