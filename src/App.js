import React from 'react';
import './App.css';

function App() {

  React.useEffect(() => {
    const c = document.getElementById("myCanvas");
    const ctx = c.getContext("2d");
    ctx.moveTo(0, 0);
    ctx.lineTo(200, 100);
    ctx.stroke();
  }, []);

  const addPoint = () => {
    const ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.beginPath();
    ctx.arc(100, 50, 10, 0, 2 * Math.PI, false);
    ctx.fillStyle = 'green';
    ctx.fill();
    ctx.lineWidth = 5;
    ctx.strokeStyle = '#003300';
    ctx.stroke();
  }

  return (
    <div className="App">
            <h1>HTML5 Canvas + React.js</h1>
      <canvas
        id="myCanvas"
        width="200"
        height="100"
        style={{ border: "1px solid #d3d3d3" }}
      >
        Your browser does not support the HTML canvas tag.
      </canvas>
      <button onClick={() => addPoint()}>Add Point</button>
    </div>
  );
}

export default App;
