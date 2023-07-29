import './error.css';
import NavigateButton from "../../components/NavigateButton";

const NoCreators = () => {
    return (
        <div className="container-fluid error">
            <span>
                <h1>Creator does not exist 🤔</h1>
                <NavigateButton path="/add">Add a creator</NavigateButton>
            </span>
        </div>
    )
}

export default NoCreators;