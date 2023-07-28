import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { supabase } from '../../client.js';
import CreatorForm from '../../components/FormInput/CreatorForm/CreatorForm.jsx';
import NoCreators from "./ErrorViews/NoCreators.jsx";
import FetchingData from "./ErrorViews/FetchingData.jsx";

const EditCreator = () => {
    const { creatorID } = useParams();

    const [creator, setCreator] = useState();
    const [loading, setLoading] = useState(true);

    const editCreator = async (creator) => {
        const { error } = await supabase
            .from('creators')
            .update(creator)
            .eq('id', creatorID)
        error && alert(error);
    }

    useEffect(() => {
        const fetchCreatorByID = async () => {
            const { data } = await supabase
                .from('creators')
                .select()
                .eq('id', creatorID)
            setCreator(data[0]);
            setLoading(false);
        }
        if (creatorID) {
            fetchCreatorByID();
        }
    }, [])
    if (loading) return <FetchingData />
    if (!creator) return <NoCreators />
    return (<CreatorForm creator={creator} handlePost={editCreator} />)
}

export default EditCreator;