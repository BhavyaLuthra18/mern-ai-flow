import { Handle, Position } from "@xyflow/react";

function InputNode({ data }) {
  return (
    <div style={{ padding: 10, border: "1px solid #555", borderRadius: 5 }}>
      <label style={{ display: "block", margin: 5 }}>Ask Something</label>
      <textarea
        placeholder="Type your question..."
        value={data.value || ""}
        onChange={(e) => data.onChange(e.target.value)}
        style={{ width: 200 }}
      />
      <Handle type="source" position={Position.Right} />
    </div>
  );
}

export default InputNode;
