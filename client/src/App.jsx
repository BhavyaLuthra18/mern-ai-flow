import { ReactFlow } from "@xyflow/react";
import "@xyflow/react/dist/style.css";

import { useState } from "react";

// custom Node components
import InputNode from "./nodes/InputNode";
import OutputNode from "./nodes/OutputNode";

// node types
const nodeTypes = {
  inputNode: InputNode,
  outputNode: OutputNode,
};

function App() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");

  // creation of nodes and edges
  const nodes = [
    {
      id: "input",
      type: "inputNode",
      position: { x: 100, y: 100 },
      data: { value: prompt, onChange: setPrompt },
    },
    {
      id: "output",
      type: "outputNode",
      position: { x: 400, y: 100 },
      data: { value: prompt },
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

  return (
    <>
      <div style={{ width: "100vw", height: "100vh" }}>
        <ReactFlow nodes={nodes} edges={edges} nodeTypes={nodeTypes} />
      </div>
    </>
  );
}

export default App;
