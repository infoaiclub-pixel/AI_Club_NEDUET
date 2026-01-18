"use client";

import { useEffect, useState } from "react";

export default function HeroBG() {
  const MIN_ROWS = 4;

  const [columns, setColumns] = useState(8);
  const [rows, setRows] = useState(MIN_ROWS);

  useEffect(() => {
    const calculateGrid = () => {
      const vw = window.innerWidth;
      const vh = window.innerHeight;

      const cols = vw < 640 ? 4 : 8; // sm breakpoint
      const cellSize = vw / cols;
      const requiredRows = Math.ceil(vh / cellSize);

      setColumns(cols);
      setRows(Math.max(MIN_ROWS, requiredRows));
    };

    calculateGrid();
    window.addEventListener("resize", calculateGrid);
    return () => window.removeEventListener("resize", calculateGrid);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
      <div
        className="grid"
        style={{
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
        }}
      >
        {Array.from({ length: rows * columns }).map((_, i) => {
          const row = Math.floor(i / columns);
          const col = i % columns;

          const columnColor =
            col % 2 === 0 ? "bg-primary1" : "bg-primary2";

          const isWhite = (col + row) % 2 === 1;

          return (
            <div
              key={i}
              className={`aspect-square ${
                isWhite ? "bg-white" : columnColor
              }`}
            />
          );
        })}
      </div>
      </div>
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `
            radial-gradient(
              circle at center,
              rgba(255,255,255,1) 0%,
              rgba(255,255,255,0.8) 50%,
              rgba(255,255,255,0.5) 100%
            )
          `,
        }}
      />
    </div>
  );
}
