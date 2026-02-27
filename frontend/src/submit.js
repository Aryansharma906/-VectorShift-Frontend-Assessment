// submit.js
import React from 'react';

export function SubmitButton({ nodes, edges }) {
  const handleSubmit = async () => {
    try {
      const res = await fetch('http://127.0.0.1:8000/pipelines/parse', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nodes, edges }),
      });

      const data = await res.json();

      alert(
        `Number of nodes: ${data.num_nodes}\n` +
        `Number of edges: ${data.num_edges}\n` +
        `Is DAG: ${data.is_dag ? 'Yes' : 'No'}`
      );
    } catch (err) {
      console.error(err);
      alert('Error contacting backend');
    }
  };

  return <button onClick={handleSubmit}>Submit</button>;
}
