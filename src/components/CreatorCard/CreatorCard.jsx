import PropTypes from 'prop-types';
import './CreatorCard.css';
import { useNavigate } from 'react-router-dom';
import SocialMediaLinks from '../SocialMediaLinks';

const CreatorCard = ({ creator }) => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate("/view/" + creator.id);
    }
    return (
        <article
            onClick={handleNavigate}
            className="card">
            <div className='overlay'>
                <h3>{creator.name}</h3>
                <p>{creator.description}</p>
                <div className="socmeds">
                    <SocialMediaLinks socmeds={creator.socialMediaLinks} />
                </div>
            </div>


            <img className="photo" src={creator.imageURL} />
        </article>
    )
}
CreatorCard.propTypes = {
    creator: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        imageURL: PropTypes.string.isRequired
    })

}

export default CreatorCard;