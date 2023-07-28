import CreatorCard from "../../components/CreatorCard/CreatorCard.jsx";
import PropTypes from 'prop-types';
import NoCreators from "./ErrorViews/NoCreators.jsx";
import './ShowCreators.css';

const ShowCreators = ({ creators }) => {
    const displayCards = () => {
        return creators.map(creator => (
            <CreatorCard key={creator.id} creator={creator} />
        ))
    }

    const style = {
        marginTop: -40,
    }

    if (!creators || !creators.length) return <NoCreators errorDesc="There are no creators yet! 😭" />
    return (
        <div className="container-fluid bunga" style={ style }>
            {displayCards()}
        </div>
    )
}
ShowCreators.propTypes = {
    creators: PropTypes.array.isRequired,
}

export default ShowCreators;