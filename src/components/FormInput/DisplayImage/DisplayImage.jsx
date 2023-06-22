import PropTypes from 'prop-types';
import './DisplayImage.css';

const DisplayImage = ({ imageURL }) => {
    return (
        <div className="circle-frame">
            <img src={imageURL} />
        </div>
    )
}
DisplayImage.propTypes = {
    imageURL: PropTypes.string.isRequired
}

export default DisplayImage;