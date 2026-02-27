import React from 'react';
import { Handle, Position } from 'reactflow';
import './nodeStyles.css';


function BaseNode({ title, icon, inputs = [], outputs = [], children, style = {} }) {
  return (
    <div className="vs-node" style={style}>
      <div className="vs-node-header">
        {icon && <span className="vs-node-icon">{icon}</span>}
        <span className="vs-node-title">{title}</span>
      </div>

      <div className="vs-node-content">
        {children}
      </div>

      {inputs.map((input, i) => (
        <Handle
          key={input.id || i}
          type="target"
          id={input.id}
          position={Position.Left}
          style={{ top: input.top ?? 40 + i * 20 }}
        />
      ))}

      {outputs.map((output, i) => (
        <Handle
          key={output.id || i}
          type="source"
          id={output.id}
          position={Position.Right}
          style={{ top: output.top ?? 40 + i * 20 }}
        />
      ))}
    </div>
  );
}

export default BaseNode;
