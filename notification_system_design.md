# Stage 1-Priority Notification Design
### Objective
The objective is to identify the most important unread notifications and present them to the user in priority order.
### Priority 
1. Placement notifications have the highest priority;Result notifications have medium priority;Event notifications have lower priority.
2. When two notifications belong to the same category, the most recent notification is given preference.
### Implementation
A custom sorting mechanism is applied to the notification collection.
The algorithm first compares notification categories using predefined weights. If two notifications have the same category weight, their timestamps are compared to determine which notification is newer.
After sorting, only the top N notifications are returned.
### Efficiency
- Sorting Complexity: O(n log n)
- Top N Extraction: O(n)
### Scalability Consideration
For continuously arriving notifications, a bounded priority queue (min-heap) can be maintained to efficiently keep only the highest-priority N notifications in memory instead of sorting the entire collection repeatedly.
### Logging
The solution integrates the reusable logging middleware to record important processing events such as notification retrieval, sorting, and result generation.
