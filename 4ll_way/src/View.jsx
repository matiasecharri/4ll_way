import "./View.css";
import { ContainerCards } from "./ContainerCards";
import { SearchBar } from "./SearchBar";

//⚠️Changes propagate from the elements above to those within, like a drill.

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
