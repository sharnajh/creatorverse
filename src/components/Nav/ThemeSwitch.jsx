import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeSwitch = ({ theme, setTheme }) => {
    const handleSwitch = () => {
        if (theme === "dark") setTheme("light");
        if (theme === "light") setTheme("dark");
    }
    return (
        <label htmlFor="switch">
            <input type="checkbox"
                id="switch"
                name="switch"
                role="switch"
                onClick={handleSwitch} />
            {theme === "light" && <FaSun />}
            {theme === "dark" && <FaMoon />}
        </label>
    )
}

export default ThemeSwitch;