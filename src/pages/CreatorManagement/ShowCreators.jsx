import CreatorCard from "../../components/CreatorCard/CreatorCard.jsx";
import PropTypes from 'prop-types';
import NoCreators from "./ErrorViews/NoCreators.jsx";

const ShowCreators = ({ creators }) => {
    const displayCards = () => {
        return creators.map(creator => (
            <CreatorCard key={creator.id} creator={creator} />
        ))
    }

    const style = {
        margin: 0,
        padding: 0,
        marginTop: "88.5px"
    }

    if (!creators || !creators.length) return <NoCreators errorDesc="There are no creators yet! 😭" />
    return (
        <div className="container-fluid grid" id="main" style={ style }>
            {displayCards()}
        </div>
    )
}
ShowCreators.propTypes = {
    creators: PropTypes.array.isRequired,
}

export default ShowCreators;