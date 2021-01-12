import "./App.css";
// import Feedback from "./components/Feedback/Feedback";
import Counter from "./components/Counter/Counter";

function App() {
  return (
    <div className="App">
      {/* <Feedback /> */}
      <Counter initialValue={15} />
    </div>
  );
}

export default App;
