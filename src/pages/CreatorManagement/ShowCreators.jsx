import CreatorCard from "../../components/CreatorCard/CreatorCard.jsx";
import PropTypes from 'prop-types';
import NoCreators from "../ErrorViews/NoCreators.jsx";
import { useContext, useEffect } from "react";
import { CreatorsContext, CreatorsContextRefresh } from "../../App.jsx";

const ShowCreators = () => {
    const creators = useContext(CreatorsContext);
    const refreshCreators = useContext(CreatorsContextRefresh);
    
    const displayCards = () => {
        return creators.map(creator => (
            <CreatorCard key={creator.id} creator={creator} />
        ))
    }

    const style = {
        marginTop: -40, 
        padding: 0,
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
        gridAutoRows: "minmax(300px, auto)"
    }

    useEffect(() => {
        refreshCreators();
    }, [])

    if (!creators || !creators.length) return <NoCreators errorDesc="There are no creators yet! 😭" />
    return (
        <div className="container-fluid" style={ style }>
            {displayCards()}
        </div>
    )
}
ShowCreators.propTypes = {
    creators: PropTypes.array.isRequired,
}

export default ShowCreators;