// import PropTypes from 'prop-types';

import { useState } from "react";
import LinkInput from "./LinkInput";
import { FaInstagram, FaTiktok, FaTwitch, FaTwitter, FaYoutube } from "react-icons/fa";
import InputDescription from "./InputDescription";

const SocialMediaInputGroup = () => {
    const [socialMediaData, setSocialMediaData] = useState([
        { name: "Twitch", link: null, icon: <FaTwitch /> },
        { name: "YouTube", link: null, icon: <FaYoutube /> },
        { name: "TikTok", link: null, icon: <FaTiktok /> },
        { name: "Instagram", link: null, icon: <FaInstagram /> },
        { name: "Twitter", link: null, icon: <FaTwitter /> }
    ]);

    return (
        <>
            <h3>SOCIAL MEDIA LINKS</h3>
            <InputDescription description="Provide at least one of the creator&apos;s social media links" />
            <br />
            {socialMediaData.map(({ name, link, icon }) => (
                <LinkInput key={name + " input"} icon={icon} name={name} value={link} />
            ))}
        </>
    )
}
// SocialMediaInputGroup.propTypes = {
//     handleChange: PropTypes.func.isRequired,
// }

export default SocialMediaInputGroup;