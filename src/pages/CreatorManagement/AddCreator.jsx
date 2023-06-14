import CreatorForm from '../../components/FormInput/CreatorForm/CreatorForm.jsx';

const AddCreator = () => {
    const emptyCreator = {
        name: "",
        imageURL: "",
        description: "",
        socialMediaLinks: {}
    }
    const addCreator = () => {}
    return <CreatorForm creator={emptyCreator} />
}

export default AddCreator;