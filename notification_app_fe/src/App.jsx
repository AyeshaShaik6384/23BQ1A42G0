import { useState } from "react";

function App() {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: "Placement",
      message: "Microsoft Corporation hiring",
      timestamp: "2026-06-04 14:48:16",
      read: false
    },
    {
      id: 2,
      type: "Placement",
      message: "Tesla Inc. hiring",
      timestamp: "2026-06-04 12:48:01",
      read: false
    },
    {
      id: 3,
      type: "Result",
      message: "mid-sem",
      timestamp: "2026-06-05 04:17:46",
      read: false
    },
    {
      id: 4,
      type: "Event",
      message: "traditional-day",
      timestamp: "2026-06-04 14:17:16",
      read: false
    }
  ]);

  const [filter, setFilter] = useState("All");
  const [topN, setTopN] = useState(10);

  const toggleRead = (id) => {
    setNotifications(
      notifications.map((item) =>
        item.id === id
          ? { ...item, read: !item.read }
          : item
      )
    );
  };

  const filtered =
    filter === "All"
      ? notifications
      : notifications.filter(
          (item) => item.type === filter
        );

  return (
    <div style={{ padding: "20px" }}>
      <h1>Notification App</h1>

      <div style={{ marginBottom: "20px" }}>
        <label>Filter: </label>

        <select
          value={filter}
          onChange={(e) =>
            setFilter(e.target.value)
          }
        >
          <option>All</option>
          <option>Placement</option>
          <option>Result</option>
          <option>Event</option>
        </select>

        <label style={{ marginLeft: "20px" }}>
          Top N:
        </label>

        <select
          value={topN}
          onChange={(e) =>
            setTopN(Number(e.target.value))
          }
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={15}>15</option>
        </select>
      </div>

      {filtered
        .slice(0, topN)
        .map((item) => (
          <div
            key={item.id}
            style={{
              border: "1px solid black",
              margin: "10px 0",
              padding: "10px",
              backgroundColor: item.read
                ? "#f0f0f0"
                : "#ffffff"
            }}
          >
            <h3>{item.type}</h3>

            <p>{item.message}</p>

            <p>{item.timestamp}</p>

            <button
              onClick={() =>
                toggleRead(item.id)
              }
            >
              {item.read
                ? "Mark Unread"
                : "Mark Read"}
            </button>
          </div>
        ))}
    </div>
  );
}

export default App;