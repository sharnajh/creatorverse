import './error.css';
import NavigateButton from "../../../components/NavigateButton";

const NoCreators = ({ errorDesc }) => {
    return (
        <div className="container-fluid error">
            <span>
                <p>{errorDesc}</p>
                <NavigateButton path="/add">Add a creator</NavigateButton>
            </span>
        </div>
    )
}

export default NoCreators;