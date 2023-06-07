import CreatorCard from "../../components/CreatorCard/CreatorCard.jsx";

const ShowCreators = () => {
    const creator = {
        name: "Kyoot Bot",
        url: "https://www.twitch.tv/kyootbot",
        description: "the baddest",
        imageURL: "https://yt3.googleusercontent.com/KaTojTV5YUJm0YJoQwOlj3lgpGBeDL6spl8FNUiPfVGizV5ayiPrGrSAfmph9BXSJs5qaGBQuwA=s900-c-k-c0x00ffffff-no-rj"
    }
    return (
        <>
            <ul className="grid">
                <CreatorCard creator={creator} />
            </ul>
        </>
    )
}

export default ShowCreators;