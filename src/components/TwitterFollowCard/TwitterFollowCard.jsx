import { useState } from "react";
import "/src/components/TwitterFollowCard/TwitterFollowCard.css";

const TwitterFollowCard = ({
  randomElement,
  format,
  userName = "Unknow",
  name,
  children,
  initialIsFollowing,
}) => {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

  const imgSrc = `https://unavatar.io/${userName}`;
  const altTag = `The avatar of ${name}`;
  const text = isFollowing ? "Unfollow" : "Follow";
  const buttonStyle = isFollowing ? "button--follow" : "button--nofollow";

  const handleFollow = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <article className="tw-follow-card">
      {randomElement}
      <header>
        <img src={imgSrc} alt={altTag} />
        <div>
          <strong>{name}</strong>
          <span>{format(userName)}</span>
          {children}
        </div>
      </header>

      <aside>
        <button className={buttonStyle} onClick={handleFollow}>
          {text}
        </button>
      </aside>
    </article>
  );
};

export default TwitterFollowCard;
