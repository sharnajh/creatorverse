import CreatorForm from '../../components/FormInput/CreatorForm/CreatorForm.jsx';
import { supabase } from '../../client.js';

const AddCreator = () => {
    const emptyCreator = {
        name: "",
        imageURL: "",
        description: "",
        socialMediaLinks: undefined
    }

    const addCreator = async (newCreator) => {
        const { error } = await supabase
            .from('creators')
            .insert(newCreator);
        error && alert(error);
        // get id of new creator for redirection
    }

    return <CreatorForm creator={emptyCreator} handlePost={addCreator} />
}

export default AddCreator;