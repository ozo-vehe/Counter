import Grid from "./Grid";
import Counter from "./Counter";
import "./App.css";

// solve the css, range utility and Grid component

function App() {
  return (
    <>
      <h2>Counter Assignment</h2>
      <Counter />
      <h2> Star Assignment </h2>

      <h2>Grid Assignment</h2>
      <Grid numRows={8} numCols={6} />
    </>
  );
}

export default App;
