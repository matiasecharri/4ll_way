import "./TwitterFollowCard.css";

export const TwitterFollowCard = ({ userName, name, avatar, isFollowing }) => {
  return (
    <article className="twitter-card" data-follow={isFollowing}>
      <header>
        <img
          src={
            avatar ||
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtACJo_dyqywX0fgg3P3hY2IDwR7J7AklVNfIqbeXk0Q&s"
          }
          alt={`${name} avatar`}
        />
        <div className="twitter-card__info">
          <strong>{name || "John Doe"}</strong>
          <span>@{userName || "johndoe"}</span>
        </div>
      </header>
      <aside>
        <button>Follow</button>
      </aside>
    </article>
  );
};
