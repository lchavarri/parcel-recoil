import React, { useEffect } from "react";
import { useRecoilState } from "recoil";

import {
  fetchCanvas,
  parseDBCanvas,
  parseDBNode,
} from "../services/canvasService";
import { canvasState, nodesState, portsState } from "../state/canvas";
import { NodeModel, DBNode } from "../types";
import NodeWidget from "./NodeWidget";

const Canvas = () => {
  const [canvas, setCanvas] = useRecoilState(canvasState);
  const [nodes, setNodes] = useRecoilState(nodesState);
  const [ports, setPorts] = useRecoilState(portsState);

  useEffect(() => {
    async function init() {
      const dbCanvas = await fetchCanvas().catch((err) => {
        console.error(err);
      });
      if (dbCanvas) {
        const [canvas, nodes, ports] = parseDBCanvas(dbCanvas);
        setCanvas(canvas);
        setNodes(nodes);
        setPorts(ports);
      }
    }

    init();
  }, []);

  const handleAdd = (ev: React.MouseEvent) => {
    const dbNode: DBNode = {
      id: "3",
      name: "Node Three",
      ports: {
        p4: {
          id: "p4",
          name: "Port four",
          type: "string",
        },
      },
    };
    const [node, nodePorts] = parseDBNode(dbNode);

    setCanvas((c) => ({
      ...c,
      nodes: {
        ...c.nodes,
        [node.id]: node.id,
      },
      ports: {
        ...c.ports,
        ...node.ports,
      },
    }));
    setNodes((n) => ({
      ...n,
      [node.id]: node,
    }));
    setPorts((p) => ({
      ...p,
      ...nodePorts,
    }));
  };

  return (
    <>
      <pre>{canvas.name}</pre>
      {Object.values(nodes).map((node: NodeModel) => (
        <NodeWidget key={node.id} node={node}></NodeWidget>
      ))}

      <button onClick={handleAdd}>Add Node</button>
    </>
  );
};

export default Canvas;
