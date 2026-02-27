// App.js
import { useCallback } from 'react';
import { useNodesState, useEdgesState } from 'reactflow';
import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { SubmitButton } from './submit';

const initialNodes = [];
const initialEdges = [];

function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, , onEdgesChange] = useEdgesState(initialEdges);

  const addNode = useCallback(
    (type) => {
      const id = `${type}-${nodes.length + 1}`;
      const position = { x: 250, y: 100 + nodes.length * 80 };

      setNodes((nds) => [
        ...nds,
        {
          id,
          type,
          position,
          data: {},
        },
      ]);
    },
    [nodes, setNodes]
  );

  return (
    <div>
      <PipelineToolbar onAddNode={addNode} />
      <PipelineUI
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
      />
      <SubmitButton nodes={nodes} edges={edges} />
    </div>
  );
}

export default App;
