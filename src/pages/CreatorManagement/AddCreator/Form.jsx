const Form = () => {
    return (
        <form>
            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text"></input>

            <label htmlFor="url">Link</label>
            <input id="url" name="url" type="text"></input>

            <label htmlFor="image-url">Image URL</label>
            <input id="image-url" name="image-url" type="text"></input>

            <label htmlFor="description">Description</label>
            <textarea id="description" name="description" rows="4"></textarea>

            <button type="submit">Sign Up</button>
        </form>)
}

export default Form;