const ComponentList = ({ components, selected, setSelected }) => {

  return (
    <div style={{ borderLeft: "1px solid #ddd", padding: "10px" }}>
      <h3>Components</h3>

      {components.map((item) => (
        <div
          key={item.id}
          onClick={() => setSelected(item.id)}
          style={{
            padding: "10px",
            marginBottom: "8px",
            cursor: "pointer",
            background: selected === item.id ? "#d1e7ff" : "#f5f5f5"
          }}
        >
          {item.name}
        </div>
      ))}
    </div>
  );
};

export default ComponentList;