const LinkInput = ({ handleRm, ...props }) => {
    const SocialMedia = [
        "Twitch", "Facebook", "Instagram", "Twitter"
    ];
    const SocialMediaOptions = () => {
        return SocialMedia.sort().map((social) => <option key={social} value={social}>{social}</option>)
    }
    return (
        <div className="grid" style={{ display: "flex" }}>
            {handleRm && <button id="rm-btn" type="button" onClick={handleRm}>X</button>}
            <select>
                <option value="" selected>Select...</option>
                {SocialMediaOptions()}
            </select>

            <input type="text" placeholder="Handle" style={{ flexGrow: 3 }} {...props} />

        </div>
    )
}

export default LinkInput;