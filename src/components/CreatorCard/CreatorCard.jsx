import PropTypes from 'prop-types';
import './CreatorCard.css';

const CreatorCard = ({ creator }) => {
    return (
        <article className="card">
            {/* <h1>{creator.name}</h1>
            <h2>{creator.url}</h2>
            <p>{creator.description}</p> */}
            <img className="photo" src={creator.imageURL} alt={`Image of ${creator.name}`} />
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