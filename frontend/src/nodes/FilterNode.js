import React from 'react';
import BaseNode from './BaseNode';

export const FilterNode = ({ id, ...props }) => {
  return (
    <BaseNode
      {...props}
      id={id}
      title="Filter"
      icon="F"
      inputs={[{ id: `${id}-input`, top: 40 }]}
      outputs={[{ id: `${id}-output`, top: 70 }]}
      style={{ background: '#020617', minWidth: 220 }}
    >
      <p style={{ fontSize: 12 }}>Filter data by a condition.</p>
    </BaseNode>
  );
};
