import TwitterFollowCard from "/src/components/TwitterFollowCard/TwitterFollowCard";
import "/src/components/TwitterFollowCard/TwitterFollowCard.css";

const ContainerCards = () => {
  const addAt = formatedName => `@${formatedName}`;
  const circle = <div className="circle"></div>;
  const miduDev = {
    randomElement: circle,
    format: addAt,
    initialIsFollowing: true,
    userName: "midudev",
    name: "Midu",
  };
  return (
    <section className="container-cards">
      <TwitterFollowCard
        randomElement={circle}
        format={addAt}
        initialIsFollowing
        userName={"matiasecharri"}
        name={"Matias Echarri"}
      />
      <TwitterFollowCard
        format={addAt}
        initialIsFollowing={false}
        userName={"dianavodopivec"}
        name={"Diana Vodopivec"}
      />
      <TwitterFollowCard
        randomElement={circle}
        format={addAt}
        initialIsFollowing
        userName={"jonmircha"}
        name={"Jon Mircha"}
      >
        <p className="small">Hello, I'm your friend and digital teacher...</p>
        <p className="small">Jonathan Children!</p>
      </TwitterFollowCard>
      <TwitterFollowCard {...miduDev} />
      <TwitterFollowCard
        format={addAt}
        initialIsFollowing={false}
        userName={"pachupacha"}
        name={"Gabriel García"}
      />
    </section>
  );
};

export default ContainerCards;
