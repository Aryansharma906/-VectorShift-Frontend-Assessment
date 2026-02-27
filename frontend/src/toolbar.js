// toolbar.js

export const PipelineToolbar = ({ onAddNode }) => {
  return (
    <div style={{ padding: '10px' }}>
      <div style={{ marginTop: '20px', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        <button onClick={() => onAddNode('customInput')}>Input</button>
        <button onClick={() => onAddNode('llm')}>LLM</button>
        <button onClick={() => onAddNode('customOutput')}>Output</button>
        <button onClick={() => onAddNode('text')}>Text</button>
      </div>
    </div>
  );
};
