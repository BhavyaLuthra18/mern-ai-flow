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
  const [loading, setLoading] = useState(false);

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
      data: { value: response, loading },
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

  const handleRunFlow = async () => {
    if (!prompt) return;
    setResponse("");
    setLoading(true);

    const res = await fetch("http://localhost:5000/api/ask-ai", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt }),
    });
    const data = await res.json();

    setResponse(data.answer);
    setLoading(false);
  };

  return (
    <>
      <div style={{ width: "100vw", height: "100vh" }}>
        <div style={{ padding: 10, left: 50, top: 10 }}>
          <button onClick={handleRunFlow}>
            {loading ? "Running..." : "Run Flow"}
          </button>
        </div>
        <ReactFlow nodes={nodes} edges={edges} nodeTypes={nodeTypes} />
      </div>
    </>
  );
}

export default App;
