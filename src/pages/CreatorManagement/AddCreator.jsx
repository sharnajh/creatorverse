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
        console.log(newCreator);
        const { error } = await supabase
            .from('creators')
            .insert(newCreator);
        error && console.error(error);
    }

    return <CreatorForm creator={emptyCreator} handlePost={addCreator} />
}

export default AddCreator;