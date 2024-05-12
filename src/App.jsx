import TwitterFollowCard from "./components/TwitterFollowCard";

const App = () => {
  const addAt = formatedName => `@${formatedName}`;

  return (
    <section className="App">
      <TwitterFollowCard
        format={addAt}
        isFollowing
        userName={"matiasecharri"}
        name={"Matias Echarri"}
      />
      <TwitterFollowCard
        format={addAt}
        isFollowing
        userName={"dianavodopivec"}
        name={"Diana Vodopivec"}
      />
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
