import PropTypes from 'prop-types';
import { useState } from "react";
import './CreatorForm.css';
import TextInput from '../TextInput.jsx';
import TextAreaInput from "../TextAreaInput.jsx";
import SocialMediaInputGroup from "../SocialMediaInputGroup.jsx";
import DisplayImage from "../DisplayImage/DisplayImage.jsx";

// Page can edit existing creators and add new creators

const CreatorForm = ({ creator, handleSubmit }) => {
    const [creatorFormData, setCreatorFormData] = useState(creator);

    const handleChange = (key, val) => {
        console.log(creatorFormData)
        setCreatorFormData({
            ...creatorFormData,
            [key]: val
        })
    }

    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });

        // Validate Form

        handleSubmit();
    }
    return (
        <form className="container">
            <div className="grid" >
                <div className="left">
                    <TextInput label="Name" keyName="name"
                        value={creatorFormData.name} handleChange={handleChange}
                        required />

                    <TextInput label="Image URL" keyName="imageURL"
                        value={creatorFormData.imageURL} handleChange={handleChange}
                        description="Provide a link to an image of your creator. Be sure to include the http://"
                        required />

                    <TextAreaInput label="Description" keyName="description"
                        rows="2"
                        value={creatorFormData.description} handleChange={handleChange}
                        description={"Provide a description of the creator. Who are they? What makes them interesting?"}
                    />
                </div>

                <div className="right">
                    <DisplayImage imageURL={creatorFormData.imageURL} />
                </div>
            </div>

            <SocialMediaInputGroup handleChange={handleChange} />

            <button type="button" onClick={handleClick} >Submit</button>
        </form>
    )
};
CreatorForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    creator: PropTypes.object.isRequired,
}

export default CreatorForm;