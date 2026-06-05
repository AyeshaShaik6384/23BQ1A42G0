import { useState } from "react";

function App() {
  const [notifications] = useState([
    {
      id: 1,
      title: "Interview",
      message: "Interview at 10 AM"
    },
    {
      id: 2,
      title: "Meeting",
      message: "Team meeting at 2 PM"
    }
  ]);

  return (
    <div>
      <h1>Notification App</h1>

      {notifications.map((item) => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <p>{item.message}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;