import { useEffect, useState } from "react";
import UploadBox from "../components/UploadBox";
import DiagramViewer from "../components/DiagramViewer";
import ComponentList from "../components/ComponentList";
import { getComponents } from "../services/api";

const Dashboard = () => {

  const [image, setImage] = useState(null);
  const [components, setComponents] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    getComponents().then((data) => {
      setComponents(data);
    });
  }, []);

  return (
    <div style={{ padding: "20px" }}>

      <h2>Diagram Dashboard</h2>

      <UploadBox setImage={setImage} />

      {image && <p>Uploaded File: {image.file.name}</p>}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: "20px",
          marginTop: "20px"
        }}
      >
        <DiagramViewer image={image} />

        <ComponentList
          components={components}
          selected={selected}
          setSelected={setSelected}
        />
      </div>
    </div>
  );
};

export default Dashboard;