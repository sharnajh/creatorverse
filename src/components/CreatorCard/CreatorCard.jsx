import './CreatorCard.css';
import PropTypes from 'prop-types';

const CreatorCard = ({ creator: { name, url, description, imageURL } }) => {
    return (
        <>
            <li className="card">
                <h1>{name}</h1>
                <h2>{url}</h2>
                <p>{description}</p>
                <img src={imageURL} alt={`Image of ${name}`} />
            </li>
        </>
    )
}
CreatorCard.propTypes = {
    creator: PropTypes.object
}

export default CreatorCard;