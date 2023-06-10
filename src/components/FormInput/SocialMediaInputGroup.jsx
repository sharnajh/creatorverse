import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import LinkInput from "./LinkInput";
import InputDescription from "./InputDescription";

const SocialMediaInputGroup = ({ handleChange }) => {
    const [smFormData, setSMFormData] = useState({
        Twitch: "",
        Tiktok: "",
        Youtube: "",
        Instagram: "",
        Twitter: ""
    });

    const handleSMObj = (key, val) => {
        setSMFormData({
            ...smFormData,
            [key]: val
        });
    }

    useEffect(() => {
        handleChange("socialMediaLinks", smFormData);
    }, [smFormData])

    return (
        <>
            <h3>SOCIAL MEDIA LINKS</h3>
            <InputDescription description="Provide at least one of the creator&apos;s social media links" />
            <br />

            {Object.keys(smFormData).map(sm => (
                <LinkInput
                    key={sm} keyName={sm}
                    value={smFormData[sm]}
                    handleChange={handleSMObj} />
            ))}
        </>
    )
}
SocialMediaInputGroup.propTypes = {
    handleChange: PropTypes.func.isRequired,
}

export default SocialMediaInputGroup;