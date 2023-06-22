import PropTypes from 'prop-types';
import './CreatorCard.css';
import { useNavigate } from 'react-router-dom';

const CreatorCard = ({ creator }) => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate("/view/" + creator.id);
    }
    return (
        <article onClick={handleNavigate} className="card" style={{backgroundImage: `url("${creator.imageURL}")` }}>

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