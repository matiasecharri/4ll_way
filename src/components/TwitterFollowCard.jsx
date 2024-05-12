import "/src/components/TwitterFollowCard.css";

const TwitterFollowCard = ({ format, userName, name, isFollowing }) => {
  const imgSrc = `https://unavatar.io/${userName}`;
  const altTag = `The avatar of ${name}`;

  console.warn(isFollowing);
  return (
    <article className="tw-follow-card">
      <header>
        <img src={imgSrc} alt={altTag} />
        <div>
          <strong>{name}</strong>
          <span>{format(userName)}</span>
        </div>
      </header>

      <aside>
        <button>Seguir</button>
      </aside>
    </article>
  );
};

export default TwitterFollowCard;
