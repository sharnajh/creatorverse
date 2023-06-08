import CreatorCard from "../../components/CreatorCard/CreatorCard.jsx";
import PropTypes from 'prop-types';

const ShowCreators = ({ creators }) => {
    return (
        <>
            <ul className="grid">
                {creators && <CreatorCard creator={creators[0]} />}
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