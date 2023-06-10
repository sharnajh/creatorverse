import InputDescription from "./InputDescription";
import TextInput from "./TextInput";
import { FaInstagram, FaTiktok, FaTwitch, FaTwitter, FaYoutube } from "react-icons/fa";

const ICON = {
    Instagram: <FaInstagram />,
    Tiktok: <FaTiktok />,
    Twitch:<FaTwitch />,
    Twitter: <FaTwitter />,
    Youtube: <FaYoutube />
}

const LinkInput = ({ keyName, ...props }) => {
    return (
        <label>
            <strong>{ICON[keyName]} {keyName}</strong>
            <InputDescription description={`The creator's ${name} handle (without the @)`} />
            <TextInput keyName={keyName} {...props} />
        </label>
    )
}

export default LinkInput;