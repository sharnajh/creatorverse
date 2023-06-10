import PropTypes from 'prop-types';
import './DisplayImage.css';

const DisplayImage = ({ imageURL }) => {
    const defaultImage = "https://media3.giphy.com/media/Ai0FCXmNLpfhQNs0af/giphy.gif?cid=ecf05e47qus8nw6uumppnfgqmfrb7vr0agoe5jlbw3b66bav&ep=v1_gifs_search&rid=giphy.gif&ct=g";

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