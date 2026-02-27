import React from 'react';
import BaseNode from './BaseNode';

export const LoggerNode = ({ id, ...props }) => {
  return (
    <BaseNode
      {...props}
      id={id}
      title="Logger"
      icon="L"
      inputs={[{ id: `${id}-input`, top: 40 }]}
      style={{ background: '#020617', minWidth: 220 }}
    >
      <p style={{ fontSize: 12 }}>Log incoming data.</p>
    </BaseNode>
  );
};
