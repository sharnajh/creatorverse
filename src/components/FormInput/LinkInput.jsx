import { FaTwitch } from "react-icons/fa";
import InputDescription from "./InputDescription";

const LinkInput = ({ name, icon, ...props }) => {
    return (
        <label>
            <strong>{icon} {name}</strong>
            <InputDescription description={`The creator's ${name} handle (without the @)`} />
            <input type="text" {...props} />
        </label>
    )
}

export default LinkInput;