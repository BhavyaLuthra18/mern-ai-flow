import { Handle, Position } from "@xyflow/react";
import ReactMarkdown from "react-markdown";

function OutputNode({ data }) {
  return (
    <div
      style={{
        padding: 10,
        border: "1px solid #555",
        borderRadius: 5,
        width: 220,
        color: "#111",
        background: "#f9f9f9",
      }}
    >
      <strong>Output</strong>

      {data.loading ? (
        <div style={{ marginTop: 8 }}>⏳Generating...</div>
      ) : (
        <ReactMarkdown>{String(data.value || "No response.")}</ReactMarkdown>
      )}

      {/**Input handle */}
      <Handle type="target" position={Position.Left} />
    </div>
  );
}

export default OutputNode;
