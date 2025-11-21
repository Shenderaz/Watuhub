import { useState } from "react";

export default function Attendance() {
  const [counts, setCounts] = useState({
    men: 0,
    women: 0,
    kids: 0,
    visitors: 0,
    returnVisitors: 0,
  });

  const handleAdd = (key) => {
    setCounts((prev) => ({
      ...prev,
      [key]: prev[key] + 1,
    }));
  };

  const categories = [
    { key: "men", label: "Men" },
    { key: "women", label: "Women" },
    { key: "kids", label: "Kids" },
    { key: "visitors", label: "Visitors" },
    { key: "returnVisitors", label: "Return Visitors" },
  ];

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <h1>Attendance Counter</h1>

      {categories.map((cat) => (
        <button
          key={cat.key}
          onClick={() => handleAdd(cat.key)}
          style={{
            display: "block",
            width: "100%",
            padding: "15px",
            margin: "10px 0",
            fontSize: "18px",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          +1 {cat.label} ({counts[cat.key]})
        </button>
      ))}
    </div>
  );
}
