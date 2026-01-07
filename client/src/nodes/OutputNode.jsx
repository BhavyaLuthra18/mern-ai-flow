import { Handle, Position } from "@xyflow/react";

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
      <div
        style={{
          marginTop: 8,
          minHeight: 40,
          fontSize: 14,
          whiteSpace: "pre-wrap",
        }}
      >
        {data.value || "No output yet."}
      </div>

      {/**Input handle */}
      <Handle type="target" position={Position.Left} />
    </div>
  );
}

export default OutputNode;
