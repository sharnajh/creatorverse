import { useNavigate } from 'react-router-dom';

const NavigateButton = ({ path, name, ...props }) => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(path);
    }
    return (
        <button role="button" onClick={handleNavigate}>{name}</button>
    )
}

export default NavigateButton;