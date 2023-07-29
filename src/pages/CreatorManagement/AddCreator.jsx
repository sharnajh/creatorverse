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
        const { data, error } = await supabase
            .from('creators')
            .insert(newCreator)
            .select()
        error && alert(error);
        return data;
    }

    return <CreatorForm creator={emptyCreator} handlePost={addCreator} />
}

export default AddCreator;