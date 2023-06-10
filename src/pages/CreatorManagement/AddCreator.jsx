import CreatorForm from "../../components/CreatorForm"

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