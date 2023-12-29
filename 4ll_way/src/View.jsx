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
<div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>;
