import "./ContainerCards.css";
import { TwitterFollowCard } from "./TwitterFollowCard";
const array = new Array(2).fill(0);
const fillWithRandomCards = array => {
  return array.map(element => <TwitterFollowCard />);
};

export const ContainerCards = () => {
  return (
    <section className="container-cards">
      <article className="container-cards_article">
        <h3>You might like</h3>
      </article>
      <TwitterFollowCard
        userName={"matiasecharri_"}
        name={"Basura Records"}
        avatar={"https://avatars.githubusercontent.com/u/114617122?v=4"}
        isFollowing={false}
      />
      <TwitterFollowCard
        userName={"DianaMondino"}
        name={"Diana Mondino"}
        avatar={
          "https://pbs.twimg.com/profile_images/1506980371627450369/YEfkGEEc_400x400.jpg"
        }
        isFollowing={false}
        verified={true}
      />
      <TwitterFollowCard
        userName={"elonmusk"}
        name={"Elon Musk"}
        avatar={
          "https://pbs.twimg.com/profile_images/1683325380441128960/yRsRRjGO_400x400.jpg"
        }
        isFollowing={false}
        verified={true}
      />
      {fillWithRandomCards(array)}
      <article className="container-cards_article-bottom">
        <h4>Show More</h4>
      </article>
    </section>
  );
};
