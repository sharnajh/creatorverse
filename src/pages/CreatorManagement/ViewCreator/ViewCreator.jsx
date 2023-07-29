import './ViewCreator.css';
import { useEffect, useState } from 'react';
import { supabase } from '../../../client.js';
import { useParams } from 'react-router-dom';
import NavigateButton from '../../../components/NavigateButton.jsx';
import DeleteCreatorButton from '../../../components/DeleteCreatorButton.jsx';
import NoCreators from '../../ErrorViews/NoCreators.jsx';
import FetchingData from '../../ErrorViews/FetchingData.jsx';
import SocialMediaLinks from '../../../components/SocialMediaLinks';
import defaultPic from '../../../assets/default.png';

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
            <article>
                <div className="info">
                    <div className="name">
                        <h1>{creator.name}</h1>
                    </div>

                    <div className="socmed">
                        <SocialMediaLinks socmeds={creator.socialMediaLinks} />
                    </div>

                    <div className="img-wrap">
                        <img src={creator.imageURL || defaultPic} alt={`Photo of ${creator.name}`} />
                    </div>

                    <div className="desc">
                        {creator.description}
                    </div>
                </div>


                <footer>
                    <span className="grid">
                        <NavigateButton path={"/edit/" + creatorID}>Edit</NavigateButton>
                        <DeleteCreatorButton />
                    </span>
                </footer>
            </article>

        </div>
    )
}

export default ViewCreator;