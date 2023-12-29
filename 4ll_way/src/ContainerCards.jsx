import "./ContainerCards.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

const format = userName => `@${userName || "johndoe"}`; //🚀03:The function that we are going to use as an argument of: "formatUserName if the userName is not a NULL, is going to use the userName and format that. Any other case (NULL) is going to use johndoe"
const johnDoeName = name => name || "John Doe";
const paragraph = (
  <p className="auxiliar-p">This user is just a template.</p>
); /*👁️03: Creating the HTML element that is going to be inside of randomElement*/

const array = new Array(2).fill(0);
const fillWithRandomCards = array => {
  return array.map((element, index) => (
    <TwitterFollowCard
      formatUserName={format}
      templateName={johnDoeName}
      randomElement={paragraph} //Passing paragraph as an argument of randomElement.
      // userName={"Rick"}
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
        userName={"matiasecharri_"}
        name={"Matias"}
        formatUserName={format} //🚀04 FINAL: The empty parameter function now has "format" as an argument.
        avatar={"https://avatars.githubusercontent.com/u/114617122?v=4"}
        isFollowing={false}
        randomElement={paragraph}
      />
      <TwitterFollowCard
        userName={"DianaMondino"}
        name={"Diana Mondino"}
        formatUserName={format}
        avatar={
          "https://pbs.twimg.com/profile_images/1506980371627450369/YEfkGEEc_400x400.jpg"
        }
        isFollowing={false}
        verified
      />
      <TwitterFollowCard
        userName={"elonmusk"}
        name={"Elon Musk"}
        formatUserName={format}
        avatar={
          "https://pbs.twimg.com/profile_images/1683325380441128960/yRsRRjGO_400x400.jpg"
        }
        isFollowing
        verified
      >
        Elon Muslim
        {/*✅03 <--AS IN HTML, AN ELEMENT INSIDE OF AN ELEMENT IS THE CHILDREN*/}
      </TwitterFollowCard>
      {fillWithRandomCards(array)}

      <article className="container-cards_article-bottom">
        <h4>Show More</h4>
      </article>
    </section>
  );
};
