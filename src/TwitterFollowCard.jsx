import "./assets/TwitterFollowCard.css";

const TwitterFollowCard = () => {
  return (
    <article className="tw-follow-card">
      <header>
        <img
          src="https://unavatar.io/csluduena"
          alt="El Avatar de Sebastia Ludueña"
        />
        <div>
          <strong>Carlos Sebastian Ludueña</strong>
          <span>@csluduena</span>
        </div>
      </header>

      <aside>
        <button>Seguir</button>
      </aside>
    </article>
  );
};

export default TwitterFollowCard;
