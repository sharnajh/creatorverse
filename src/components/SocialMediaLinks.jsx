import { FaInstagram, FaTiktok, FaTwitch, FaTwitter, FaYoutube } from 'react-icons/fa';

const SOCMEDDATA = {
    INSTAGRAM: {
        "name": "Instagram",
        "icon": <FaInstagram />,
        "url": "https://www.instagram.com/"
    },
    TWITCH: {
        "name": "Twitch",
        "icon": <FaTwitch />,
        "url": "https://www.twitch.tv/"
    },
    TIKTOK: {
        "name": "Tiktok",
        "icon": <FaTiktok />,
        "url": "https://www.tiktok.com/@"
    },
    TWITTER: {
        "name": "Twitter",
        "icon": <FaTwitter />,
        "url": "https://twitter.com/"
    },
    YOUTUBE: {
        "name": "Youtube",
        "icon": <FaYoutube />,
        "url": "https://www.youtube.com/@"
    }
}

const Button = ({ data, handle }) => {
    console.log(data.icon, handle);
    const style = {
        marginRight: "10px",
        backgroundColor: "#263745",
        border: "none",
    }
    return (
        <a role="button"
            href={data.url + handle}
            data-tooltip={"@" + handle}
            style={style}>
            {data.icon}
        </a>
    )
}

const SocialMediaLinks = ({ socmeds }) => {
    const { Instagram, Youtube, Twitch, Tiktok, Twitter } = socmeds;
    return (
        <span>
            {Instagram && <Button data={SOCMEDDATA.INSTAGRAM} handle={Instagram} />}
            {Youtube && <Button data={SOCMEDDATA.YOUTUBE} handle={Youtube} />}
            {Twitch && <Button data={SOCMEDDATA.TWITCH} handle={Twitch} />}
            {Twitter && <Button data={SOCMEDDATA.TWITTER} handle={Twitter} />}
            {Tiktok && <Button data={SOCMEDDATA.TIKTOK} handle={Tiktok} />}
        </span>
    )
}

export default SocialMediaLinks;