import PropTypes from 'prop-types';
import './DisplayImage.css';

const DisplayImage = ({ imageURL }) => {
    const defaultImage = "https://i.imgur.com/D3ESLqa.gif";

    const manageImage = () => {

    }

    return (

        <span className="photo-wrapper">
            <label>
                Image Preview
                <img className="photo" src={imageURL || defaultImage} />
            </label>
        </span>

    )
}
DisplayImage.propTypes = {
    imageURL: PropTypes.string.isRequired
}

export default DisplayImage;