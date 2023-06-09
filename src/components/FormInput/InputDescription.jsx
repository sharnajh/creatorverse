const InputDescription = ({ description }) => {
    const tipStyle = {
        display: "block", 
        margin: 0, 
        fontSize: "0.8em"
    }
    return (
        <em style={tipStyle}>{description}</em>
    )
}

export default InputDescription;