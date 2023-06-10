import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { supabase } from '../../client.js';
import TextInput from '../../components/FormInput/TextInput.jsx';
import TextAreaInput from "../../components/FormInput/TextAreaInput.jsx";
import SocialMediaInputGroup from "../../components/FormInput/SocialMediaInputGroup.jsx";
import DisplayImage from "../../components/FormInput/DisplayImage/DisplayImage.jsx";
import ImageURLInput from "../../components/FormInput/ImageURLInput.jsx";

// Page can edit existing creators and add new creators

const CreatorForm = () => {
    const { creatorID } = useParams();

    const [name, setName] = useState("");
    const [imageURL, setImageURL] = useState("");
    const [description, setDescription] = useState("");
    const [socialMediaLinks, setSocialMediaLinks] = useState("");

    useEffect(() => {
        if (creatorID) {
            const fetchCreatorByID = async () => {
                const { data, err } = await supabase
                    .from('creators')
                    .select()
                    .eq('id', creatorID)

                const creator = data[0];
                setName(creator.name);
                setImageURL(creator.imageURL);
                setDescription(creator.description);
                setSocialMediaLinks(creator.socialMediaLinks);
            }
            fetchCreatorByID();
        }
    }, [creatorID])
    return (
        <form className="container">
            <div className="grid">
                <span>
                    <TextInput name="Name"
                        value={name} handleChange={setName}
                        required />

                    <ImageURLInput name="Image URL"
                        value={imageURL} handleChange={setImageURL}
                        description="Provide a link to an image of your creator. Be sure to include the http://"
                        required />

                    <TextAreaInput name="Description" rows="2"
                        value={description} handleChange={setDescription}
                    />
                </span>

                <DisplayImage imageURL={imageURL} />
            </div>

            <SocialMediaInputGroup handleChange={setSocialMediaLinks} />

            <button type="button" >SUBMIT</button>
        </form>
    )
};

export default CreatorForm;