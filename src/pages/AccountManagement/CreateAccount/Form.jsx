const Form = () => {
    return (
        <form>
            <label htmlFor="username" type="username">Username</label>
            <input id="username" type="username"></input>

            <label htmlFor="password" type="password">Password</label>
            <input id="password" type="password"></input>

            <button type="submit">Sign Up</button>
        </form>)
}

export default Form;