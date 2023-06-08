import PropTypes from 'prop-types';
import SocialMediaInput from './SocialMediaInput';
import { useState } from 'react';

const SocialMediaLinks = () => {
    return (
        <>
            <h3>SOCIAL MEDIA LINKS</h3>
            <p>Provide at least one of the creator's social media links</p>
            <SocialMediaInput />
        </>
    )
}
// SocialMediaLinks.propTypes = {
//     handleChange: PropTypes.func.isRequired,
// }

export default SocialMediaLinks;