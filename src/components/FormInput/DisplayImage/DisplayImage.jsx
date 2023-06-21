import PropTypes from 'prop-types';
import './DisplayImage.css';

const DisplayImage = ({ imageURL }) => {
    return (
        <div className="circle-frame">
            {imageURL ? <img src={imageURL} /> : <h2>Image Preview</h2>}
        </div>
    )
}
DisplayImage.propTypes = {
    imageURL: PropTypes.string.isRequired
}

export default DisplayImage;