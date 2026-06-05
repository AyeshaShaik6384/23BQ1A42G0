const Log = require("../logging_middleware/logger");

const notificationData = {
    "notifications": [
        {
            "ID": "146f86d6-7f74-464b-97ac-d3cf9c72a9aa",
            "Type": "Event",
            "Message": "farewell",
            "Timestamp": "2026-06-04 22:08:31"
        },
        {
            "ID": "749b6652-f582-4f95-bc1a-868c3217414c",
            "Type": "Placement",
            "Message": "Meta Platforms Inc. hiring",
            "Timestamp": "2026-06-04 07:08:16"
        },
        {
            "ID": "493bfb8f-18ab-4386-a521-c3c99b4b78b0",
            "Type": "Result",
            "Message": "project-review",
            "Timestamp": "2026-06-05 05:38:01"
        },
        {
            "ID": "626b5cdf-6342-4806-9933-ca01cabce7a0",
            "Type": "Event",
            "Message": "tech-fest",
            "Timestamp": "2026-06-04 20:37:46"
        },
        {
            "ID": "0e185f98-a5e6-4bd6-aba1-1d7a8cb75410",
            "Type": "Event",
            "Message": "cult-fest",
            "Timestamp": "2026-06-04 09:37:31"
        },
        {
            "ID": "f912bd70-1a7c-414e-b9bf-fd0e8ef44251",
            "Type": "Event",
            "Message": "traditional-day",
            "Timestamp": "2026-06-04 13:07:16"
        },
        {
            "ID": "9ec11fe0-0e8a-4cd0-a3ad-060ae68a3ee4",
            "Type": "Event",
            "Message": "tech-fest",
            "Timestamp": "2026-06-04 17:37:01"
        },
        {
            "ID": "e1533a02-7f94-46b7-bfa2-a2a6e8700643",
            "Type": "Event",
            "Message": "cult-fest",
            "Timestamp": "2026-06-04 14:06:46"
        },
        {
            "ID": "39b2cf37-c121-4a0a-a742-f06dabb0fb5c",
            "Type": "Result",
            "Message": "end-sem",
            "Timestamp": "2026-06-04 15:36:31"
        },
        {
            "ID": "14f0cc96-d6a6-438b-a4e6-8d75b10b6855",
            "Type": "Event",
            "Message": "traditional-day",
            "Timestamp": "2026-06-05 03:36:16"
        },
        {
            "ID": "e3617fe2-d43d-4bb0-8ed4-ad4fde4c9b2c",
            "Type": "Result",
            "Message": "mid-sem",
            "Timestamp": "2026-06-04 23:36:01"
        },
        {
            "ID": "09f273d7-d1ff-4ccf-89f9-d767cd194de0",
            "Type": "Event",
            "Message": "tech-fest",
            "Timestamp": "2026-06-04 22:35:46"
        },
        {
            "ID": "76f74a6d-781c-4731-9f33-677472492832",
            "Type": "Event",
            "Message": "cult-fest",
            "Timestamp": "2026-06-05 04:35:31"
        },
        {
            "ID": "a904c15a-4960-4105-9dec-7dd5a02ea18e",
            "Type": "Result",
            "Message": "mid-sem",
            "Timestamp": "2026-06-04 12:05:16"
        },
        {
            "ID": "9ea42884-3934-498f-b6db-4c366d6a3ae6",
            "Type": "Result",
            "Message": "mid-sem",
            "Timestamp": "2026-06-05 05:35:01"
        },
        {
            "ID": "33b55406-4b84-456e-83d8-861e9046c627",
            "Type": "Result",
            "Message": "mid-sem",
            "Timestamp": "2026-06-04 21:04:46"
        },
        {
            "ID": "d531aac8-a5a3-46c3-8cc5-aff59b5e9eac",
            "Type": "Placement",
            "Message": "Alphabet Inc. Class C hiring",
            "Timestamp": "2026-06-05 05:04:31"
        },
        {
            "ID": "96fee62b-c0fe-4e65-9ae6-a883d2ffe012",
            "Type": "Result",
            "Message": "external",
            "Timestamp": "2026-06-04 11:04:16"
        },
        {
            "ID": "f3f361e9-ff4c-4e13-a55a-5d784677722d",
            "Type": "Placement",
            "Message": "Booking Holdings Inc. hiring",
            "Timestamp": "2026-06-05 01:34:01"
        },
        {
            "ID": "d7acb51e-6eda-4cf7-a194-ca7398e05562",
            "Type": "Placement",
            "Message": "Booking Holdings Inc. hiring",
            "Timestamp": "2026-06-04 11:33:46"
        }
    ]
};

Log(
  "frontend",
  "info",
  "component",
  "Notification prioritization started"
);

function calculatePriority(type) {
  const priorityMap = {
    Placement: 3,
    Result: 2,
    Event: 1
  };

  return priorityMap[type] || 0;
}

function getTopNotifications(data, limit = 10) {

  Log(
    "frontend",
    "info",
    "component",
    `Received ${data.length} notifications`
  );

  Log(
    "frontend",
    "info",
    "component",
    "Sorting notifications based on priority and timestamp"
  );

  const sortedNotifications = [...data].sort((first, second) => {

    const firstPriority = calculatePriority(first.Type);
    const secondPriority = calculatePriority(second.Type);

    if (firstPriority !== secondPriority) {
      return secondPriority - firstPriority;
    }

    return (
      new Date(second.Timestamp).getTime() -
      new Date(first.Timestamp).getTime()
    );

  });

  Log(
    "frontend",
    "info",
    "component",
    "Notification sorting completed"
  );

  const topNotifications = sortedNotifications.slice(0, limit);

  Log(
    "frontend",
    "info",
    "component",
    `Generated top ${limit} priority notifications`
  );

  return topNotifications;
}

const topNotifications = getTopNotifications(
  notificationData.notifications,
  10
);

Log(
  "frontend",
  "info",
  "component",
  "Displaying priority notifications"
);

console.log("\nTop 10 Priority Notifications\n");

topNotifications.forEach((item, index) => {

  console.log(
    `${index + 1}. ${item.Type} | ${item.Message} | ${item.Timestamp}`
  );

});

Log(
  "frontend",
  "info",
  "component",
  "Priority notification generation completed"
);