// ui.js
import React from 'react';
import ReactFlow from 'reactflow';
import 'reactflow/dist/style.css';

import { InputNode } from './nodes/inputNode';
import { LLMNode } from './nodes/llmNode';
import { OutputNode } from './nodes/outputNode';
import { TextNode } from './nodes/textNode';

const nodeTypes = {
  customInput: InputNode,
  llm: LLMNode,
  customOutput: OutputNode,
  text: TextNode,
};

export function PipelineUI({ nodes, edges, onNodesChange, onEdgesChange, onConnect }) {
  return (
    <div style={{ height: '80vh' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}   // ← NEW
        nodeTypes={nodeTypes}
        fitView
      />
    </div>
  );
}
