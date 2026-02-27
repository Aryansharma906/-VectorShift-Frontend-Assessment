import React from 'react';
import BaseNode from './BaseNode';

export const MathNode = ({ id, ...props }) => {
  return (
    <BaseNode
      {...props}
      id={id}
      title="Math"
      icon="M"
      inputs={[
        { id: `${id}-a`, top: 40 },
        { id: `${id}-b`, top: 70 },
      ]}
      outputs={[{ id: `${id}-result`, top: 55 }]}
      style={{ background: '#020617', minWidth: 220 }}
    >
      <p style={{ fontSize: 12 }}>Combine two numbers.</p>
    </BaseNode>
  );
};
