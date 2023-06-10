import { useState } from "react";
import TextInput from './FormInput/TextInput.jsx';
import TextAreaInput from "./FormInput/TextAreaInput.jsx";
import SocialMediaInputGroup from "./FormInput/SocialMediaInputGroup.jsx";
import DisplayImage from "./FormInput/DisplayImage/DisplayImage.jsx";

// Page can edit existing creators and add new creators

const CreatorForm = ({ creator, handleSubmit }) => {
    const [creatorFormData, setCreatorFormData] = useState(creator);

    const handleChange = (key, val) => {
        setCreatorFormData({
            ...creatorFormData,
            [key]: val
        })
    }

    return (
        <form className="container">
            <div className="grid" >
                <span>
                    <TextInput label="Name" keyName="name"
                        value={creatorFormData.name} handleChange={handleChange}
                        required />

                    <TextInput label="Image URL" keyName="imageURL"
                        value={creatorFormData.imageURL} handleChange={handleChange}
                        description="Provide a link to an image of your creator. Be sure to include the http://"
                        required />

                    <TextAreaInput label="Description" rows="2" keyName="description"
                        value={creatorFormData.description} handleChange={handleChange}
                    />
                </span>

                <DisplayImage imageURL={creatorFormData.imageURL} />
            </div>

            <SocialMediaInputGroup handleChange={handleChange} />

            <button type="button" onClick={handleSubmit} >Submit</button>
        </form>
    )
};

export default CreatorForm;