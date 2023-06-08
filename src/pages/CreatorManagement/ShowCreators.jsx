import CreatorCard from "../../components/CreatorCard/CreatorCard.jsx";
import PropTypes from 'prop-types';

const ShowCreators = ({ creators }) => {
    const displayCards = () => {
        return creators.map(creator =>
            <CreatorCard key={creator.id} creator={creator} />
        )
    }

    return (
        <ul className="grid">
            {creators ? displayCards() : "Loading..."}
        </ul>
    )
}
ShowCreators.propTypes = {
    creators: PropTypes.array.isRequired,
}

export default ShowCreators;