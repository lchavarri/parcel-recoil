import React, { useEffect } from "react";
import { useRecoilState } from "recoil";

import { fetchCanvas } from "../services/canvasService";
import { canvas as canvasState } from "../state/canvas";

export const useCanvas = () => {
  const [canvas, setCanvas] = useRecoilState(canvasState);

  useEffect(() => {
    async function init() {
      const canvas = await fetchCanvas().catch((err) => {
        console.error(err);
      });
      if (canvas) {
        setCanvas(canvas);
      }
    }

    init();
  }, []);

  return canvas;
};
