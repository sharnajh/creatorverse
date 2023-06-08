import { useState } from "react";
import TextInput from '../../../components/FormInput/TextInput';
import TextAreaInput from "../../../components/FormInput/TextAreaInput";
import SocialMediaLinks from "../../../components/FormInput/SocialMediaInputGroup";

const Form = () => {
    const [name, setName] = useState("");
    const [imageURL, setImageURL] = useState("");
    const [description, setDescription] = useState("");
    const [socialMediaLinks, setSocialMediaLinks] = useState({});

    const submitData = () => {
        if (socialMediaLinks.length === 0) {
            alert("Must include one social media link")
        }
    }
    return (
        <form>
            <TextInput name="Name"
                value={name} handleChange={setName}
                required />

            <TextInput name="Image URL"
                value={imageURL} handleChange={setImageURL}
                placeholder="http://" required />

            <TextAreaInput name="Description" rows="4"
                value={description} handleChange={setDescription}
            />

            <SocialMediaLinks handleChange={setSocialMediaLinks} />

            <button onClick={submitData} type="button">SUBMIT</button>
        </form>
    )
}

export default Form;