/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import CreatorCard from "../../components/CreatorCard/CreatorCard.jsx";
import PropTypes from 'prop-types';

const ShowCreators = ({ creators }) => {
    const displayCards = () => {
        return creators.map(creator => <CreatorCard creator={creator} />)
    }

    return (
        <>
            <ul className="grid">
                {creators ? displayCards() : "Loading..."}
            </ul>
        </>
    )
}
ShowCreators.propTypes = {
    creators: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        url: PropTypes.string,
        description: PropTypes.string,
        imageURL: PropTypes.string
    })
}

export default ShowCreators;