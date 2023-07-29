import { useEffect, useState } from 'react';
import { supabase } from '../../client.js';
import { useParams } from 'react-router-dom';
import NavigateButton from '../../components/NavigateButton.jsx';
import DeleteCreatorButton from '../../components/DeleteCreatorButton.jsx';
import NoCreators from '../ErrorViews/NoCreators.jsx';
import FetchingData from '../ErrorViews/FetchingData.jsx';

const ViewCreator = () => {
    const { creatorID } = useParams();
    const [creator, setCreator] = useState(undefined);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCreatorByID = async () => {
            const { data, err } = await supabase
                .from('creators')
                .select()
                .eq('id', creatorID)
            err && console.error(err)
            setCreator(data[0])
            setLoading(false);
        }
        fetchCreatorByID();
    }, [setCreator, creatorID])
    if (loading) return <FetchingData />
    if (!creator) return <NoCreators />
    return (
        <div className="container">
            <h1>User ID: {creatorID}</h1>
            {creator && <h1>Name: {creator.name}</h1>}
            <span className="grid">
                <NavigateButton path={"/edit/" + creatorID}>Edit</NavigateButton>
                <DeleteCreatorButton />
            </span>
        </div>
    )
}

export default ViewCreator;