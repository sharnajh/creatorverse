import CreatorCard from "../../components/CreatorCard/CreatorCard.jsx";
import PropTypes from 'prop-types';

const ShowCreators = ({ creators }) => {
    const displayCards = () => {
        return creators.map(creator =>
            <CreatorCard key={creator.id} creator={creator} />
        )
    }

    return (
        <div className="grid">
            {creators ? displayCards() : "Loading..."}
        </div>
    )
}
ShowCreators.propTypes = {
    creators: PropTypes.array.isRequired,
}

export default ShowCreators;