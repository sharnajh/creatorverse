import { BiErrorCircle } from 'react-icons/bi';

const InputDescription = ({ description, error }) => {
    const tipStyle = {
        display: "block",
        margin: 0,
        fontSize: "0.8em"
    }
    return (
        <>
            <em style={tipStyle}>{description}</em>
            {error && <em style={{ ...tipStyle, color: "#de1d1d" }}><BiErrorCircle /> {error}</em>}
        </>
    )
}

export default InputDescription;