const notifications = {
  "notifications": [
    {
      "ID": "8e5e1573-dd77-47e4-9b67-101d5df63a00",
      "Type": "Placement",
      "Message": "Microsoft Corporation hiring",
      "Timestamp": "2026-06-04 14:48:16"
    },
    {
      "ID": "a351712a-d49c-4511-b208-59bd9e7e0d7f",
      "Type": "Placement",
      "Message": "Tesla Inc. hiring",
      "Timestamp": "2026-06-04 12:48:01"
    },
    {
      "ID": "900d2e5c-b2aa-42f1-a169-ab52cde269ed",
      "Type": "Result",
      "Message": "mid-sem",
      "Timestamp": "2026-06-05 04:17:46"
    },
    {
      "ID": "3c28efb2-172d-43a8-9114-72825b3c0cbc",
      "Type": "Result",
      "Message": "mid-sem",
      "Timestamp": "2026-06-05 02:47:31"
    },
    {
      "ID": "08194240-9780-4221-b57a-46789a72f901",
      "Type": "Event",
      "Message": "traditional-day",
      "Timestamp": "2026-06-04 14:17:16"
    },
    {
      "ID": "a0a7e690-7eb9-4d81-bcb8-53c897ff9e90",
      "Type": "Result",
      "Message": "project-review",
      "Timestamp": "2026-06-04 05:17:01"
    },
    {
      "ID": "9fccef1b-299a-490b-8fea-47e344725706",
      "Type": "Event",
      "Message": "traditional-day",
      "Timestamp": "2026-06-04 09:16:46"
    },
    {
      "ID": "4903568f-8aac-4cf0-89c1-121e57d1f9ac",
      "Type": "Result",
      "Message": "internal",
      "Timestamp": "2026-06-04 11:46:31"
    },
    {
      "ID": "64ee423c-059d-4efb-9c17-f3ec184501be",
      "Type": "Result",
      "Message": "external",
      "Timestamp": "2026-06-04 14:46:16"
    },
    {
      "ID": "b7a7a170-54d9-468e-bb5e-5afe54c0598b",
      "Type": "Result",
      "Message": "project-review",
      "Timestamp": "2026-06-04 17:46:01"
    },
    {
      "ID": "167f9dac-7795-4c7c-b58a-46783ecfe216",
      "Type": "Result",
      "Message": "mid-sem",
      "Timestamp": "2026-06-05 02:45:46"
    },
    {
      "ID": "2c0a1c19-7543-49a1-8da9-3eab82f41cc5",
      "Type": "Result",
      "Message": "mid-sem",
      "Timestamp": "2026-06-04 14:45:31"
    },
    {
      "ID": "c9dc1012-1876-45db-95a4-bfbecee74643",
      "Type": "Placement",
      "Message": "Marriott International Inc. hiring",
      "Timestamp": "2026-06-04 12:45:16"
    },
    {
      "ID": "05c1fb42-89e3-4d33-bfdc-122d3cd106b8",
      "Type": "Placement",
      "Message": "TSMC hiring",
      "Timestamp": "2026-06-04 10:15:01"
    },
    {
      "ID": "5339eb30-1f72-4b19-8178-2ab9bef4ac47",
      "Type": "Result",
      "Message": "internal",
      "Timestamp": "2026-06-04 14:14:46"
    },
    {
      "ID": "67381553-c2af-4b95-a698-e12bf64807d5",
      "Type": "Event",
      "Message": "cult-fest",
      "Timestamp": "2026-06-04 18:14:31"
    },
    {
      "ID": "0dd47d5f-3a96-48e7-ab5e-c10cc7d10e6e",
      "Type": "Result",
      "Message": "internal",
      "Timestamp": "2026-06-04 23:44:16"
    },
    {
      "ID": "85f3f4c7-a8a1-4f35-8bc8-70f05cb567eb",
      "Type": "Result",
      "Message": "end-sem",
      "Timestamp": "2026-06-04 09:14:01"
    },
    {
      "ID": "0a7d353c-77b7-4e35-90ad-b3d2c1b8c0d8",
      "Type": "Event",
      "Message": "farewell",
      "Timestamp": "2026-06-05 02:13:46"
    },
    {
      "ID": "3b59bde4-19ca-41da-a7dd-3c2c28897967",
      "Type": "Result",
      "Message": "mid-sem",
      "Timestamp": "2026-06-05 00:13:31"
    }
  ]
};

const data = notifications.notifications;

const priority = {
  Placement: 3,
  Result: 2,
  Event: 1
};

data.sort((a, b) => {

  if (priority[b.Type] !== priority[a.Type]) {
    return priority[b.Type] - priority[a.Type];
  }

  return new Date(b.Timestamp) - new Date(a.Timestamp);

});

const top10 = data.slice(0, 10);

console.log("Top 10 Priority Notifications\n");

top10.forEach((n, index) => {
  console.log(
    `${index + 1}. ${n.Type} | ${n.Message} | ${n.Timestamp}`
  );
});