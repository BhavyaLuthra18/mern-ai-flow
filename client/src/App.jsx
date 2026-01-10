import { ReactFlow } from "@xyflow/react";
import "@xyflow/react/dist/style.css";

// Toast Notifications
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useState } from "react";

// Custom Node Components
import InputNode from "./nodes/InputNode";
import OutputNode from "./nodes/OutputNode";

// Node Types
const nodeTypes = {
  inputNode: InputNode,
  outputNode: OutputNode,
};

function App() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);

  // Creation of nodes and edges
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

  // Connector between nodes
  const edges = [
    {
      id: "input-output",
      source: "input",
      target: "output",
    },
  ];

  // Handle Run Flow Func
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

  // Handle Save Response Func
  const handleSaveResponse = async () => {
    if (!prompt || !response) return;

    setSaving(true);

    await fetch("http://localhost:5000/api/save-response", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt, response }),
    });

    setSaving(false);

    toast.success("Saved to DB successfully!");

    // Clearing fields after saving
    setPrompt("");
    setResponse("");

    // Refocus input for next query
    document.querySelector("textarea")?.focus();
  };

  return (
    <>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/**----------Container----------- */}
        <div
          style={{
            width: "70vw",
            height: "70vh",
            display: "flex",
            flexDirection: "column",
            background: "rgba(40, 50, 60, 0.35)",
            border: "2px solid rgba(150,150,165,0.5)",
            borderRadius: "12px",
            backdropFilter: "blur(6px)",
            padding: "18px",
            margin: "12px",
            marginTop: "2vh",
          }}
        >
          <h1
            style={{
              margin: 0,
              textAlign: "center",
              marginBottom: "10px",
              fontSize: "30px",
              fontWeight: "300",
            }}
          >
            Prompt - Response Panel
          </h1>
          {/**-----------------------------Flow-Canvas-------------------------- */}
          <div
            style={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "12px",
              width: "100%",
              height: "100%",
            }}
          >
            <div
              style={{
                width: "85%",
                height: "100%",
                background: "rgba(18, 24, 32, 0.35)",
                border: "1px solid rgba(120,120,130,0.4)",
                borderRadius: "10px",
                overflow: "hidden",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ReactFlow
                nodes={nodes}
                edges={edges}
                nodeTypes={nodeTypes}
                panOnScroll={false}
                zoomOnScroll={false}
                zoomOnPinch={false}
                panOnDrag={false}
                style={{
                  marginLeft: "70px",
                }}
              />
            </div>
          </div>
          {/*---------Buttons------------*/}
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              gap: "10px",
              marginTop: "10px",
            }}
          >
            <button
              onClick={handleRunFlow}
              disabled={loading}
              style={{
                fontWeight: "300",
                padding: "12px 28px",
                borderRadius: "12px",
                background: "#111",
                color: "white",
                border: "2px solid transparent",
                fontSize: "1.2rem",
                cursor: "pointer",
                transition: "border 0.25s ease, transform 0.25s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.border = "2px solid #1e90ff")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.border = "2px solid transparent")
              }
            >
              {loading ? "Thinking..." : "Run Flow"}
            </button>
            <button
              onClick={handleSaveResponse}
              disabled={saving}
              style={{
                padding: "12px 28px",
                borderRadius: "12px",
                background: "#1e6fe8",
                color: "white",
                border: "2px solid transparent",
                fontSize: "1.2rem",
                fontWeight: "300",
                cursor: saving ? "not-allowed" : "pointer",
                opacity: saving ? 0.7 : 1,
                transition: "border 0.25s ease, transform 0.25s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.border = "2px solid #1e90ff")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.border = "2px solid transparent")
              }
            >
              {saving ? "Saving..." : "Save"}
            </button>
          </div>
        </div>
      </div>
      <ToastContainer position="top-right" />
    </>
  );
}

export default App;
