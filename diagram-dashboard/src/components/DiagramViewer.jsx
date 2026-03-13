import { useState } from "react";

const DiagramViewer = ({ image }) => {

  const [zoom, setZoom] = useState(1);

  const zoomIn = () => setZoom(prev => prev + 0.2);
  const zoomOut = () => setZoom(prev => Math.max(0.5, prev - 0.2));
  const reset = () => setZoom(1);

  if (!image) {
    return <p>No image uploaded</p>;
  }

  return (
    <div>
      <div style={{ marginBottom: "10px" }}>
        <button onClick={zoomIn}>Zoom In</button>
        <button onClick={zoomOut}>Zoom Out</button>
        <button onClick={reset}>Reset</button>
      </div>

      <div
        style={{
          border: "1px solid #ddd",
          overflow: "hidden",
          height: "400px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <img
          src={image.preview}
          alt="diagram"
          style={{
            transform: `scale(${zoom})`,
            transition: "0.3s"
          }}
        />
      </div>
    </div>
  );
};

export default DiagramViewer;