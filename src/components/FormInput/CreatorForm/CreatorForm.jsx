import PropTypes from 'prop-types';
import { useState } from "react";
import './CreatorForm.css';
import TextInput from '../InputFields/TextInput.jsx';
import TextAreaInput from "../InputFields/TextAreaInput.jsx";
import SocialMediaInputGroup from "../SocialMediaInputGroup.jsx";
// import DisplayImage from "../DisplayImage/DisplayImage.jsx";

// Page can edit existing creators and add new creators

const CreatorForm = ({ creator, handlePost }) => {
    const [creatorFormData, setCreatorFormData] = useState(creator);
    const [formErrors, setFormErrors] = useState({});

    const handleChange = (key, val) => {
        setCreatorFormData({
            ...creatorFormData,
            [key]: val
        })
    }

    const validateData = () => {
        const { name, description, socialMediaLinks } = creatorFormData;
        return {
            name: name === "",
            description: description === "",
            socialMediaLinks:
                Object.values(socialMediaLinks)
                    .every(sm => sm === "")
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });

        // Validate Form
        const errors = validateData();
        setFormErrors(errors);

        // Send data
        if (Object.values(errors).every((f) => f === false)) {
            handlePost(creatorFormData);
        }
    }
    return (
        <form className="container" onSubmit={handleSubmit}>
            <div className="grid" >
                <div className="left">
                    <TextInput label="Name" keyName="name"
                        value={creatorFormData.name} handleChange={handleChange}
                        aria-invalid={formErrors.name || undefined} />

                    <TextAreaInput label="Description" keyName="description"
                        value={creatorFormData.description} handleChange={handleChange}
                        description={"Provide a description of the creator. Who are they? What makes them interesting?"}
                        aria-invalid={formErrors.description || undefined}
                        rows="2"
                    />

                    <TextInput label="Image URL (optional)" keyName="imageURL"
                        value={creatorFormData.imageURL} handleChange={handleChange}
                        description="Provide a link to an image of your creator. Be sure to include the http://"
                    />
                </div>

                {/* <div className="right">
                    <DisplayImage imageURL={creatorFormData.imageURL} />
                </div> */}
            </div>

            <SocialMediaInputGroup
                smData={creator.socialMediaLinks}
                error={formErrors.socialMediaLinks}
                handleChange={handleChange} />

            <button type="submit">Submit</button>
        </form>
    )
};
CreatorForm.propTypes = {
    handlePost: PropTypes.func.isRequired,
    creator: PropTypes.object.isRequired,
}

export default CreatorForm;