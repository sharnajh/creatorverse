import { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { supabase } from '../client.js';
import { useNavigate, useParams } from 'react-router-dom';

const DeleteCreatorButton = () => {
    const { creatorID } = useParams();

    const [modal, setModal] = useState(false);
    const [disabled, setDisabled] = useState(false);

    const navigate = useNavigate();

    const handleDelete = async () => {
        const { error } = await supabase
            .from('creators')
            .delete()
            .eq('id', creatorID)
        error && alert(error);
        setModal(false);
        setDisabled(false);
    }

    const handleClick = () => {
        setDisabled(true);

        handleDelete().then(() => {
            setModal(false);
            setDisabled(false);

            // Move page
            navigate("/");
        });
    }

    const style = {
        backgroundColor: "var(--form-element-invalid-border-color)",
        border: "none"
    }
    return (
        <>
            <button style={style} onClick={() => setModal(true)}>
                <FaTrashAlt />
            </button>

            <dialog id="modal-example" open={modal}>
                <article>
                    <h3>Are you sure you&apos;re sure? 🥺</h3>
                    <p style={{ fontSize: 20 }}>
                        After you delete a creator, you cannot undo this action!
                    </p>
                    <footer>
                        <button
                            data-target="modal-example"
                            onClick={handleClick}
                            style={style}
                            disabled={disabled}
                            aria-busy={disabled}>
                            ☠️🪦 To the shadow realms! 👋🏽
                        </button>
                        <button
                            className="secondary"
                            data-target="modal-example"
                            onClick={() => setModal(false)}>
                            Nevermind
                        </button>
                    </footer>
                </article>
            </dialog>
        </>

    )
}

export default DeleteCreatorButton;