// llmNode.js

import React from 'react';
import BaseNode from './BaseNode';

export const LLMNode = ({ id, data, ...props }) => {
  return (
    <BaseNode
      {...props}
      id={id}
      title="LLM"
      icon="L"
      inputs={[
        { id: `${id}-system`, top: 50 },
        { id: `${id}-prompt`, top: 80 },
      ]}
      outputs={[{ id: `${id}-response`, top: 65 }]}
      style={{ background: '#020617', minWidth: 220 }}
    >
      <div style={{ fontSize: 12 }}>
        <p>This is a LLM.</p>
      </div>
    </BaseNode>
  );
};


