import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { supabase } from '../../client.js';
import CreatorForm from '../../components/FormInput/CreatorForm/CreatorForm.jsx';
import NoCreators from "./ErrorViews/NoCreators.jsx";

const EditCreator = () => {
    const { creatorID } = useParams();

    const [data, setData] = useState();

    useEffect(() => {
        if (creatorID) {
            const fetchCreatorByID = async () => {
                const { data } = await supabase
                    .from('creators')
                    .select()
                    .eq('id', creatorID)
                setData(data);
            }
            fetchCreatorByID();
        }
    }, [])
    if (data && !data.length) return <NoCreators errorDesc={"404: User does not exist 🤔"} />
    return (<>{data && <CreatorForm creator={data[0]} />}</>)
}

export default EditCreator;