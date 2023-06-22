import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { supabase } from '../../client.js';
import CreatorForm from '../../components/FormInput/CreatorForm/CreatorForm.jsx';
import NoCreators from "./ErrorViews/NoCreators.jsx";

const EditCreator = () => {
    const { creatorID } = useParams();

    const [creator, setCreator] = useState();

    const editCreator = async (creator) => {
        const { error } = await supabase
            .from('creators')
            .update(creator)
            .eq('id', creatorID)
    }

    useEffect(() => {
        if (creatorID) {
            const fetchCreatorByID = async () => {
                const { data } = await supabase
                    .from('creators')
                    .select()
                    .eq('id', creatorID)
                setCreator(data[0]);
                console.log(data);
            }
            fetchCreatorByID();
        }
    }, [])
    if (!creator) return <NoCreators errorDesc={"404: User does not exist 🤔"} />
    return (<CreatorForm creator={creator} handlePost={editCreator} />)
}

export default EditCreator;