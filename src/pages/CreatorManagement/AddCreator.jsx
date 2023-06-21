import CreatorForm from '../../components/FormInput/CreatorForm/CreatorForm.jsx';

const AddCreator = () => {
    const emptyCreator = {
        name: "",
        imageURL: "",
        description: "",
        socialMediaLinks: {
            // Instagram: "",
            // Tiktok: "",
            // Twitch: "",
            // Twitter: "",
            // Youtube: ""
        }
    }
    
    return <CreatorForm creator={emptyCreator} />
}

export default AddCreator;