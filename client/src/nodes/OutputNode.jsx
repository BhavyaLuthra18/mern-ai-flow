import { Handle, Position } from "@xyflow/react";
import ReactMarkdown from "react-markdown";

function OutputNode({ data }) {
  return (
    <div
      style={{
        width: "240px",
        maxHeight: "200px",
        background: "#fff",
        color: "#000",
        borderRadius: "8px",
        padding: "10px",
        fontSize: "14px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
        border: "1px solid #ddd",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <strong>Output</strong>
      <div
        className="output-scroll"
        style={{
          maxHeight: "210px",
          overflowY: "auto",
          paddingRight: "6px",
        }}
      >
        {data.loading ? (
          <div style={{ marginTop: 8 }}>⏳Generating...</div>
        ) : (
          <ReactMarkdown>{String(data.value || "No response.")}</ReactMarkdown>
        )}
      </div>
      <Handle type="target" position={Position.Left} />
    </div>
  );
}

export default OutputNode;
