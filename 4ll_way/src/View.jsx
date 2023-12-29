import "./View.css";
import { ContainerCards } from "./ContainerCards";
import { SearchBar } from "./SearchBar";

export const View = () => {
  return (
    <div className="view">
      <header className="view-header"></header>
      <main className="view-main"></main>
      <aside className="view-aside">
        <SearchBar />
        <ContainerCards />
        <ContainerCards />
      </aside>
    </div>
  );
};
