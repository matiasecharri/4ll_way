import "./TwitterFollowCard.css";

export const TwitterFollowCard = ({
  formatUserName, // 🚀01: Creating a parameter that will receive a function (later).
  templateName,
  templateImg,
  userName,
  name,
  avatar,
  isFollowing,
  verified,
  randomElement, // 👁️01: Creating a parameter that will receive an """HTML""" element later.
}) => {
  return (
    <article className="twitter-card" data-follow={isFollowing}>
      <header>
        <img src={avatar || templateImg} alt={`${name} avatar`} />
        <div className="twitter-card__info">
          <strong>
            {name || templateName(null)}
            {verified === true ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="#1d9bf0"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                />
              </svg>
            ) : null}
          </strong>
          <span>{formatUserName(userName) || null} </span>
          {/*🚀02: Calling the paramterFunction here, but is still empty, we are going to fill it "ContainerCards", we are also setting the possiblity of having a null here, then if we dont define userName is going to be a null, and we can do things with that.*/}
          <span>{randomElement}</span>
          {/*👁️02: The ""HTML"" element is going to be inside of this span.*/}
        </div>
      </header>
      <aside>
        <button>Follow</button>
      </aside>
    </article>
  );
};
