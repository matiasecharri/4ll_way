import Counter from "./components/Counter/Counter";
import ContainerCards from "./components/TwitterFollowCard/ContainerCards";
import TicTacToe from "./components/TicTacToe/TicTacToe";
import TimeChecker from "./components/TimeChecker/TimeChecker";

const App = () => {
  return (
    <>
      <main
        style={{
          display: "flex",
          gap: "120px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TimeChecker />
        <Counter />
        <ContainerCards />
        <TicTacToe />
      </main>
    </>
  );
};

export default App;
