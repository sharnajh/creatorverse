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
        setCreatorFormData({
            ...creatorFormData,
            [key]: val
        })
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

                    <TextAreaInput label="Description" rows="2" keyName="description"
                        value={creatorFormData.description} handleChange={handleChange}
                    />
                </div>
                
                <div className="right">
                    <DisplayImage imageURL={creatorFormData.imageURL} />
                </div>
            </div>

            <SocialMediaInputGroup handleChange={handleChange} />

            <button type="button" onClick={handleSubmit} >Submit</button>
        </form>
    )
};

export default CreatorForm;