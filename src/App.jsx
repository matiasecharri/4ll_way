import TwitterFollowCard from "./components/TwitterFollowCard";

const App = () => {
  const addAt = formatedName => `@${formatedName}`;
  const circle = <div className="circle"></div>;
  const miduDev = {
    randomElement: circle,
    format: addAt,
    isFollowing: true,
    userName: "midudev",
    name: "Midu",
  };

  return (
    <section className="App">
      <TwitterFollowCard
        randomElement={circle}
        format={addAt}
        isFollowing
        userName={"matiasecharri"}
        name={"Matias Echarri"}
      />
      <TwitterFollowCard
        format={addAt}
        isFollowing={false}
        userName={"dianavodopivec"}
        name={"Diana Vodopivec"}
      />
      <TwitterFollowCard
        randomElement={circle}
        format={addAt}
        isFollowing
        userName={"jonmircha"}
        name={"Jon Mircha"}
      >
        <p className="small">Hello, I'm your friend and digital teacher...</p>
        <p className="small">Jonathan Children!</p>
      </TwitterFollowCard>
      <TwitterFollowCard {...miduDev} />
      <TwitterFollowCard
        format={addAt}
        isFollowing={false}
        userName={"pachupacha"}
        name={"Gabriel García"}
      />
    </section>
  );
};

export default App;
