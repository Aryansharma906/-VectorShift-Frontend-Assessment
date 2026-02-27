// outputNode.js

import React from 'react';
import BaseNode from './BaseNode';

export const OutputNode = ({ id, data, ...props }) => {
  return (
    <BaseNode
      {...props}
      id={id}
      title="Output"
      icon="O"
      inputs={[{ id: `${id}-input`, top: 50 }]}
      style={{ background: '#020617', minWidth: 220 }}
    >
      <div style={{ fontSize: 12 }}>
        <p>Output node.</p>
      </div>
    </BaseNode>
  );
};

