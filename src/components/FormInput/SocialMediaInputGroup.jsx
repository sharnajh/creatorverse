import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import LinkInput from "./InputFields/LinkInput";
import InputDescription from "./InputFields/InputDescription";

const BLANK_SM_DATA = {
    Instagram: "",
    Tiktok: "",
    Twitch: "",
    Twitter: "",
    Youtube: ""
}

const SocialMediaInputGroup = ({ smData = BLANK_SM_DATA, handleChange, error }) => {
    const [smFormData, setSMFormData] = useState(smData);

    const handleSMObj = (key, val) => {
        setSMFormData({
            ...smFormData,
            [key]: val
        });
    }

    useEffect(() => {
        handleChange("socialMediaLinks", smFormData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [smFormData])

    return (
        <>
            <h3>SOCIAL MEDIA LINKS</h3>
            <InputDescription
                description="Provide at least one of the creator&apos;s social media handles"
                error={error && "Missing at least one social media handle"}
            />
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
    smData: PropTypes.object,
    error: PropTypes.bool
}

export default SocialMediaInputGroup;