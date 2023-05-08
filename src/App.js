import { useState } from "react";

import CardList from "./components/CardList";
import LangSort from "./components/LangSort";

const programRate = [
  { id: "security", rate: [2, 0, 1, 3] },
  { id: "pupularity", rate: [1, 2, 0, 3] },
  { id: "cross-platform", rate: [2, 0, 1, 3] },
  { id: "company-used", rate: [0, 1, 3, 2] },
  { id: "data-science", rate: [1, 2, 3, 0] },
  { id: "learning-complex", rate: [1, 0, 2, 3] },
  { id: "package-library", rate: [1, 0, 2, 3] },
  { id: "front-web", rate: [0, 1, 2, 3] },
  { id: "server-side", rate: [2, 1, 0, 3] },
];
function App() {
  const [cards, setCards] = useState([]);
  return (
    <div className="w-full p-4 h-screen flex justify-center items-center overflow-hidden flex-col gap-4">
      <h2 className="uppercase font-bold">Best Programming Language</h2>
      <CardList dataList={programRate} cards={cards} setCards={setCards} />
      <LangSort dataList={cards} />
    </div>
  );
}

export default App;
