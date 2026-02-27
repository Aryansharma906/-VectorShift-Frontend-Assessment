import React from 'react';
import BaseNode from './BaseNode';

export const DelayNode = ({ id, ...props }) => {
  return (
    <BaseNode
      {...props}
      id={id}
      title="Delay"
      icon="D"
      inputs={[{ id: `${id}-input`, top: 40 }]}
      outputs={[{ id: `${id}-output`, top: 70 }]}
      style={{ background: '#020617', minWidth: 220 }}
    >
      <p style={{ fontSize: 12 }}>Delay processing for some time.</p>
    </BaseNode>
  );
};
