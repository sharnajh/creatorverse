import PropTypes from 'prop-types';
import './DisplayImage.css';

const DisplayImage = ({ imageURL }) => {
    // const handleError = (el) => {
    //     el.src = "https://placehold.co/500?text=Invalid+Image+URL&font=roboto";
    // }
    // const style = {
    //     backgroundImage: `url(${imageURL})`
    // }
    return (
        // <div className="photo"
        //     loading="lazy"
        //     alt="Image of Creator"
        //     style={style} >
        //     {<h2>Image Preview</h2>}
        // </div>
        <div className="circle-frame">
            {imageURL ? <img src={imageURL} /> : <h2>Image Preview</h2>}
        </div>
    )
}
DisplayImage.propTypes = {
    imageURL: PropTypes.string.isRequired
}

export default DisplayImage;