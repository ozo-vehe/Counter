import { range } from './utils';

function Grid({ numRows, numCols }) {
  const numRowsRange = range(numRows);
  const numColsRange = range(numCols);
  console.log(numColsRange, numRowsRange);
  return (
    <div className="grid">
      {numRowsRange.map((row, index) => (
        <div className="row" key={index}>
          {numColsRange.map((col, index) => (
            <div className="cell" key={index}></div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default Grid;
