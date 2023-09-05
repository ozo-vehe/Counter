import Grid from "./Grid";
import Counter from "./Counter";
import StarRating from "./StarRating";
import "./App.css";

// solve the css, range utility and Grid component

function App() {
  return (
    <>
      <h1>Counter Assignment</h1>
      <Counter />

      <h1> Star Assignment </h1>
      <div>
        <section>
          <h2>Winter&apos;s Orbit</h2>
          <p>Rating: 5 / 5</p>
          <StarRating rating={5} />
        </section>
        <section>
          <h2>Dial D for Deadman</h2>
          <p>Rating: 4 / 5</p>
          <StarRating rating={4} />
        </section>
        <section>
          <h2>Words And Things</h2>
          <p>Rating: 0 / 5</p>
          <StarRating rating={0} />
        </section>
        <section>
          <h2>The Galaxy, And The Ground Within</h2>
          <p>Rating: 5 / 5</p>
          <StarRating rating={5} />
        </section>
      </div>

      {/* Line break */}

      <h1>Grid Assignment</h1>
      <Grid numRows={8} numCols={6} />
    </>
  );
}

export default App;
