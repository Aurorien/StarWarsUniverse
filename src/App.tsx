import CharacterInfo from "./components/CharacterInfo";
import CharacterList from "./components/CharacterList";
import Header from "./Header";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <CharacterList />
        <CharacterInfo />
      </main>
    </>
  );
}

export default App;
