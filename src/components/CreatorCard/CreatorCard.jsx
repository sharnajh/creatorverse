import './CreatorCard.css';
import PropTypes from 'prop-types';

const CreatorCard = ({ creator }) => {
    return (
        <li className="card">
            <h1>{creator.name}</h1>
            <h2>{creator.url}</h2>
            <p>{creator.description}</p>
            <img src={creator.imageURL} alt={`Image of ${creator.name}`} />
        </li>
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