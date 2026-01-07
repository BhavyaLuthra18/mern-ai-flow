import { ReactFlow } from "@xyflow/react";
import "@xyflow/react/dist/style.css";

// creation of nodes and edges
const nodes = [
  {
    id: "input",
    position: { x: 100, y: 100 },
    data: { label: "Input Node" },
  },
  {
    id: "output",
    position: { x: 400, y: 100 },
    data: { label: "Output Node" },
  },
];

// connector between nodes
const edges = [
  {
    id: "input-output",
    source: "input",
    target: "output",
  },
];

function App() {
  return (
    <>
      <div style={{ width: "100vw", height: "100vh" }}>
        <ReactFlow nodes={nodes} edges={edges} />
      </div>
    </>
  );
}

export default App;
