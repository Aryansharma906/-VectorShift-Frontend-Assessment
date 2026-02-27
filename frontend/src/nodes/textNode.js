// textNode.js

import React, { useState, useMemo } from 'react';
import BaseNode from './BaseNode';

export const TextNode = ({ id, data, ...props }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  // Find all {{variable}} names in the text
  const variables = useMemo(() => {
    const matches = currText.match(/{{\s*([a-zA-Z_$][\w$]*)\s*}}/g) || [];
    const names = matches.map((m) => m.replace(/{{\s*|\s*}}/g, ''));
    return Array.from(new Set(names));
  }, [currText]);

  return (
    <BaseNode
      {...props}
      id={id}
      title="Text"
      icon="T"
      // one handle per variable on the left
      inputs={variables.map((v, i) => ({ id: `${id}-${v}`, top: 60 + i * 20 }))}
      // one output handle on the right
      outputs={[{ id: `${id}-output`, top: 40 }]}
      style={{ background: '#020617', minWidth: 260 }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6, fontSize: 12 }}>
        <label style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          Text:
          <textarea
            value={currText}
            onChange={handleTextChange}
            className="nodrag"
            style={{
              width: '100%',
              minHeight: 60,
              maxHeight: 200,
              resize: 'none',
              background: '#020617',
              color: '#e5e7eb',
              border: '1px solid #1f2937',
              borderRadius: 6,
              padding: 6,
              fontSize: 12,
            }}
            rows={Math.min(6, 1 + Math.floor(currText.length / 40))}
          />
        </label>
      </div>
    </BaseNode>
  );
};
