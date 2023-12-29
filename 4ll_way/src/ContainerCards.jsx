import "./ContainerCards.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

const format = userName => `@${userName || "johndoe"}`; //🚀03:The function that we are going to use as an argument of: "formatUserName if the userName is not a NULL, is going to use the userName and format that. Any other case (NULL) is going to use johndoe"
const johnDoeName = name => name || "John Doe";

const array = new Array(2).fill(0);
const fillWithRandomCards = array => {
  return array.map((element, index) => (
    <TwitterFollowCard
      formatUserName={format}
      templateName={johnDoeName}
      // userName={"Rick"} intentionally commenting this, to test the null possibility!
      templateImg={
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtACJo_dyqywX0fgg3P3hY2IDwR7J7AklVNfIqbeXk0Q&s"
      }
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
        formatUserName={format} //🚀04 FINAL: The empty parameter function now has "format" as an argument.
        userName={"matiasecharri_"}
        name={"Basura Records"}
        avatar={"https://avatars.githubusercontent.com/u/114617122?v=4"}
        isFollowing={false}
      />
      <TwitterFollowCard
        formatUserName={format}
        userName={"DianaMondino"}
        name={"Diana Mondino"}
        avatar={
          "https://pbs.twimg.com/profile_images/1506980371627450369/YEfkGEEc_400x400.jpg"
        }
        isFollowing={false}
        verified
      />
      <TwitterFollowCard
        formatUserName={format}
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
