import React from 'react';
import BaseNode from './BaseNode';

export const ConditionNode = ({ id, ...props }) => {
  return (
    <BaseNode
      {...props}
      id={id}
      title="Condition"
      icon="C"
      inputs={[{ id: `${id}-input`, top: 40 }]}
      outputs={[
        { id: `${id}-true`, top: 70 },
        { id: `${id}-false`, top: 100 },
      ]}
      style={{ background: '#020617', minWidth: 220 }}
    >
      <p style={{ fontSize: 12 }}>Branch based on a condition.</p>
    </BaseNode>
  );
};
