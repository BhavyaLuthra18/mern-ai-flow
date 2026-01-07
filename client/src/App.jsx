import { ReactFlow } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { useState } from "react";
import InputNode from "./nodes/InputNode";

// node types
const nodeTypes = {
  inputNode: InputNode,
};

function App() {
  const [prompt, setPrompt] = useState("");

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

  return (
    <>
      <div style={{ width: "100vw", height: "100vh" }}>
        <ReactFlow nodes={nodes} edges={edges} nodeTypes={nodeTypes} />
      </div>
    </>
  );
}

export default App;
