import { FaTrashAlt } from 'react-icons/fa';

const DeleteCreatorButton = ({ creator }) => {
    const style = {
        backgroundColor: "#B71C1C",
        border: "none"
    }
    return (
        <button style={style}><FaTrashAlt /></button>
    )
}

export default DeleteCreatorButton;