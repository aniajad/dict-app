import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Dictionary</header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          Coded by Anna Jadczyszyn on{" "}
          <a href="https://github.com/aniajad/dict-app">GitHub</a>
        </footer>
      </div>
    </div>
  );
}
