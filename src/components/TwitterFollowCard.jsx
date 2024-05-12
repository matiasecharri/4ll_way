import "/src/components/TwitterFollowCard.css";

const TwitterFollowCard = ({
  randomElement,
  format,
  isFollowing,
  userName = "Unknow",
  name,
  children,
}) => {
  const imgSrc = `https://unavatar.io/${userName}`;
  const altTag = `The avatar of ${name}`;
  const text = isFollowing ? "Unfollow" : "Follow";

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
        <button>{text}</button>
      </aside>
    </article>
  );
};

export default TwitterFollowCard;
