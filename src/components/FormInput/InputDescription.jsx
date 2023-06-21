const InputDescription = ({ description, error }) => {
    const tipStyle = {
        display: "block",
        margin: 0,
        fontSize: "0.8em"
    }
    return (
        <>
            <em style={tipStyle}>{description}</em>
            <em style={{ color: "red" }}>{error}</em>
        </>
    )
}

export default InputDescription;