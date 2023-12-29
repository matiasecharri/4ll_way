import "./ContainerCards.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

const addAt = userName => `@${userName || "johndoe"}`;
const johnDoeName = name => name || "John Doe";

const array = new Array(2).fill(0);
const fillWithRandomCards = array => {
  return array.map((element, index) => (
    <TwitterFollowCard
      formatUserName={addAt}
      templateName={johnDoeName}
      key={index}
    />
  ));
};

export const ContainerCards = () => {
  return (
    <section className="container-cards">
      <article className="container-cards_article">
        <h3>You might like</h3>
      </article>
      <TwitterFollowCard
        formatUserName={addAt}
        userName={"matiasecharri_"}
        name={"Basura Records"}
        avatar={"https://avatars.githubusercontent.com/u/114617122?v=4"}
        isFollowing={false}
      />
      <TwitterFollowCard
        formatUserName={addAt}
        userName={"DianaMondino"}
        name={"Diana Mondino"}
        avatar={
          "https://pbs.twimg.com/profile_images/1506980371627450369/YEfkGEEc_400x400.jpg"
        }
        isFollowing={false}
        verified
      />
      <TwitterFollowCard
        formatUserName={addAt}
        userName={"elonmusk"}
        name={"Elon Musk"}
        avatar={
          "https://pbs.twimg.com/profile_images/1683325380441128960/yRsRRjGO_400x400.jpg"
        }
        isFollowing
        verified
      />
      {fillWithRandomCards(array)}

      <article className="container-cards_article-bottom">
        <h4>Show More</h4>
      </article>
    </section>
  );
};
