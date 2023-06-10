import PropTypes from 'prop-types';
import './DisplayImage.css';

const DisplayImage = ({ imageURL }) => {
    const defaultImage = "https://placehold.co/500?text=Image+Preview&font=roboto";
    const handleError = (el) => {
        el.src = "https://placehold.co/500?text=Invalid+Image+URL&font=roboto";
    }
    return (
        <div className="photo-wrapper">
            <img className="photo"
                loading="lazy"
                alt="Image of Creator"
                onError={({ currentTarget }) => handleError(currentTarget)}
                src={imageURL || defaultImage} />
        </div>
    )
}
DisplayImage.propTypes = {
    imageURL: PropTypes.string.isRequired
}

export default DisplayImage;