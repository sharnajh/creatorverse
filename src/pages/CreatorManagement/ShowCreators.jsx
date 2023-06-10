import CreatorCard from "../../components/CreatorCard/CreatorCard.jsx";
import PropTypes from 'prop-types';
import NoCreators from "./ErrorViews/NoCreators.jsx";

const ShowCreators = ({ creators }) => {

    console.log(creators);
    const displayCards = () => {
        return creators.map(creator => (
            <CreatorCard key={creator.id} creator={creator} />
        ))
    }

    if (!creators || !creators.length) return <NoCreators errorDesc="There are no creators yet! 😭" />
    return (
        <div className="container-fluid grid">
            {displayCards()}
        </div>
    )
}
ShowCreators.propTypes = {
    creators: PropTypes.array.isRequired,
}

export default ShowCreators;