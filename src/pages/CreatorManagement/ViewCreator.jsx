import { useEffect, useState } from 'react';
import { supabase } from '../../client.js';
import { useParams } from 'react-router-dom';
import NavigateButton from '../../components/NavigateButton.jsx';

const ViewCreator = () => {
    const { creatorID } = useParams();
    const [creator, setCreator] = useState(undefined);

    useEffect(() => {
        const fetchCreatorByID = async () => {
            const { data, err } = await supabase
                .from('creators')
                .select()
                .eq('id', creatorID)
            err && console.error(err)
            setCreator(data[0])
        }
        fetchCreatorByID();
    }, [setCreator, creatorID])
    return (
        <div className="container" id="main">
            <h1>User ID: {creatorID}</h1>
            {creator && <h1>Name: {creator.name}</h1>}
            <span className="grid">
                <NavigateButton path={"/edit/" + creatorID}>Edit</NavigateButton>
                <button>Delete</button>
            </span>
        </div>
    )
}

export default ViewCreator;