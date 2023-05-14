import "./App.css";
import Decor from "./components/Decor";
import NotePage from "./components/NotePage";

const entries = [
  {
    content: "hehe",
  },
  {
    content: "to anyone reading this. u matter.",
  },
  {
    content: "[racial slur here]",
  }
];

function App() {
  return (
    <div>
      <Decor />
      <NotePage content={entries}/>
    </div>
  );
}

export default App;
