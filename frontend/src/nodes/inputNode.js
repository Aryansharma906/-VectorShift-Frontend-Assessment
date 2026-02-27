// inputNode.js

import React, { useState } from 'react';
import BaseNode from './BaseNode';
import './nodeStyles.css';


export const InputNode = ({ id, data, ...props }) => {
  const [currName, setCurrName] = useState(
    data?.inputName || id.replace('customInput-', 'input_')
  );
  const [inputType, setInputType] = useState(data?.inputType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
    // Optional: if you want to sync back to React Flow, you can update data here
  };

  const handleTypeChange = (e) => {
    setInputType(e.target.value);
  };

  return (
    <BaseNode
      {...props}
      id={id}
      title="Input"
      icon="I"
      outputs={[{ id: `${id}-value`, top: 50 }]}
      style={{ background: '#020617', minWidth: 220 }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        <label style={{ display: 'flex', flexDirection: 'column', gap: 4, fontSize: 12 }}>
          Name:
          <input
            type="text"
            value={currName}
            onChange={handleNameChange}
            style={{
              padding: 4,
              borderRadius: 4,
              border: '1px solid #1f2937',
              background: '#020617',
              color: '#e5e7eb',
            }}
          />
        </label>

        <label style={{ display: 'flex', flexDirection: 'column', gap: 4, fontSize: 12 }}>
          Type:
          <select
            value={inputType}
            onChange={handleTypeChange}
            style={{
              padding: 4,
              borderRadius: 4,
              border: '1px solid #1f2937',
              background: '#020617',
              color: '#e5e7eb',
            }}
          >
            <option value="Text">Text</option>
            <option value="File">File</option>
          </select>
        </label>
      </div>
    </BaseNode>
  );
};

