import { useNavigate } from 'react-router-dom';

const NavigateButton = ({ path, children, ...props }) => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(path);
    }
    return (
        <button role="button" onClick={handleNavigate} {...props}>{children}</button>
    )
}

export default NavigateButton;