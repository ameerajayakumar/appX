import { useCallback } from 'react';
import { ReactFlow, addEdge, Background, useNodesState, useEdgesState, Controls } from '@xyflow/react';
import '@xyflow/react/dist/style.css';

const initialNodes = [
  {
    id: '1',
    type: 'input',
    data: { label: 'Start Node' },
    position: { x: 250, y: 5 },
    className: 'light',
  },
  {
    id: '2',
    data: { label: 'Left Node' },
    position: { x: 100, y: 100 },
    className: 'light',
  },

  {
    id: '3',
    data: { label: 'Right Node' },
    position: { x: 320, y: 100 },
    className: 'light',
  },
  {
    id: '4',
    data: { label: 'Group B' },
    position: { x: 320, y: 200 },
    className: 'light',
    style: { backgroundColor: 'rgb(242,242,243,0.3)', width: 350, height: 300 },
    type: 'group',
  },
  {
    id: '4a',
    data: { label: 'Sub Start Node' },
    position: { x: 75, y: 30 },
    className: 'light',
    parentId: '4',
    extent: 'parent',
  },

  {
    id: '4b',
    data: { label: 'Sub Left Node' },
    position: { x: 15, y: 100 },
    className: 'light',
    parentId: '4',
    extent: 'parent',
  },
  {
    id: '4c',
    data: { label: 'Sub Right Node' },
    position: { x: 180, y: 170 },
    className: 'light',
    parentId: '4',
    extent: 'parent',
  },
];

const initialEdges = [
  { id: 'e1', source: '1', target: '2', animated: true },
  { id: 'e2', source: '1', target: '3' },
  { id: 'e3', source: '3', target: '4a' },
  { id: 'e4', source: '4a', target: '4b' },
  { id: 'e5', source: '4a', target: '4c' },
];

const ReactFlowDiagram = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback((connection) => {
    setEdges((eds) => addEdge(connection, eds));
  }, []);

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      className="react-flow-subflows-example"
      fitView
    >
      <Controls />
      <Background />
    </ReactFlow>
  );
};

export default ReactFlowDiagram;
