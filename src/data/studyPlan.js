export const weeklyStudyPlan = [
  {
    month: "Month 1 — Foundations",
    color: "#3b82f6",
    weeks: [
      {
        week: "Week 1", topic: "Programming Language Basics", color: "#60a5fa",
        sessions: [
          { day: "Mon", title: "Python / JS Core Syntax", items: ["Variables, Data Types, Type Casting", "if/else, loops (for, while)", "Functions, default args, *args, **kwargs", "String methods: split, join, strip, format"], resource: "freeCodeCamp Python / JS course (YouTube)", leetcode: "None — concept day" },
          { day: "Tue", title: "OOP Concepts", items: ["Classes, Objects, __init__", "Inheritance, Polymorphism", "Encapsulation, Abstraction", "Practice: Build a BankAccount class"], resource: "Corey Schafer OOP playlist (YouTube)", leetcode: "None — concept day" },
          { day: "Wed", title: "File I/O + Error Handling", items: ["try/except/finally", "Reading & writing files", "JSON parsing", "Practice: Read a CSV and print data"], resource: "Python docs / W3Schools", leetcode: "None — concept day" },
          { day: "Thu", title: "Collections & Comprehensions", items: ["Lists, Tuples, Sets, Dicts", "List comprehension, dict comprehension", "zip(), map(), filter(), enumerate()", "Practice: 10 small exercises"], resource: "CS Dojo Python playlist", leetcode: "Easy: Two Sum (#1)" },
          { day: "Fri", title: "Git & GitHub", items: ["git init, add, commit, push, pull", "Branching: git branch, merge, rebase", "Create GitHub account + first repo", "Push a small Python/JS project"], resource: "Traversy Media Git Crash Course", leetcode: "Easy: Palindrome Number (#9)" },
          { day: "Sat", title: "Linux & Command Line", items: ["ls, cd, mkdir, rm, cp, mv", "grep, cat, tail, chmod", "SSH basics", "Practice: Navigate a folder using ONLY terminal"], resource: "The Linux Command Line (free PDF)", leetcode: "Easy: Valid Anagram (#242)" },
          { day: "Sun", title: "Review + Jobs", items: ["Revise all Week 1 topics", "Fix gaps in notes", "Apply to 5 jobs", "Update LinkedIn with new skills"], resource: "Your notes", leetcode: "Retry any unsolved" },
        ],
      },
      {
        week: "Week 2", topic: "Data Structures — Linear", color: "#3b82f6",
        sessions: [
          { day: "Mon", title: "Arrays & Strings", items: ["Array operations: insert, delete, search", "Two pointer technique", "Sliding window technique", "Practice: Reverse array, find duplicates"], resource: "Abdul Bari DSA playlist", leetcode: "Easy: Best Time to Buy Stock (#121), Contains Duplicate (#217)" },
          { day: "Tue", title: "Linked Lists", items: ["Singly linked list: insert, delete, traverse", "Doubly linked list", "Reverse a linked list", "Detect cycle (Floyd's algorithm)"], resource: "Striver's SDE Sheet — LL section", leetcode: "Easy: Reverse Linked List (#206), Merge Two Sorted Lists (#21)" },
          { day: "Wed", title: "Stacks", items: ["Stack using array & linked list", "Push, pop, peek, isEmpty", "Applications: balanced parentheses, undo feature", "Monotonic stack concept"], resource: "NeetCode Stack playlist", leetcode: "Easy: Valid Parentheses (#20), Min Stack (#155)" },
          { day: "Thu", title: "Queues & Dequeues", items: ["Queue using array", "Circular queue", "Dequeue (double-ended queue)", "Priority Queue concept"], resource: "Jenny's DSA playlist", leetcode: "Easy: Implement Queue using Stacks (#232)" },
          { day: "Fri", title: "Hash Maps & Hash Sets", items: ["How hashing works", "Collision resolution", "Python dict / JS Map internals", "Common patterns: frequency count, two sum"], resource: "NeetCode Arrays & Hashing", leetcode: "Easy: Two Sum (#1), Valid Anagram (#242), Group Anagrams (#49)" },
          { day: "Sat", title: "Strings Deep Dive", items: ["KMP algorithm (string matching)", "Anagram checks", "Palindrome problems", "Substring search patterns"], resource: "Striver's String sheet", leetcode: "Medium: Longest Substring Without Repeat (#3), Longest Palindromic Substring (#5)" },
          { day: "Sun", title: "Review + Mock", items: ["Redo 3 problems without looking at solution", "Write definitions of all 5 DS in your own words", "Apply to 5 jobs"], resource: "LeetCode profile", leetcode: "Retry any failed problems" },
        ],
      },
      {
        week: "Week 3", topic: "Data Structures — Non-Linear", color: "#2563eb",
        sessions: [
          { day: "Mon", title: "Binary Trees", items: ["Tree terminology: root, leaf, height, depth", "BFS (Level Order Traversal)", "DFS: Inorder, Preorder, Postorder", "Recursive vs iterative approach"], resource: "NeetCode Trees playlist", leetcode: "Easy: Invert Binary Tree (#226), Maximum Depth (#104), Same Tree (#100)" },
          { day: "Tue", title: "Binary Search Trees", items: ["BST property: left < root < right", "Search, Insert, Delete in BST", "Validate BST", "In-order traversal = sorted output"], resource: "Abdul Bari BST lectures", leetcode: "Easy: Search in BST (#700), Medium: Validate BST (#98)" },
          { day: "Wed", title: "Heaps / Priority Queue", items: ["Min-heap vs Max-heap", "Heapify, insert, extract operations", "Python: heapq module", "Use case: Top K elements"], resource: "NeetCode Heap playlist", leetcode: "Easy: Kth Largest Element (#703), Medium: Top K Frequent (#347)" },
          { day: "Thu", title: "Graphs — Basics", items: ["Adjacency matrix vs adjacency list", "Directed vs undirected graphs", "BFS on graph", "DFS on graph"], resource: "Striver's Graph series", leetcode: "Medium: Number of Islands (#200), Clone Graph (#133)" },
          { day: "Fri", title: "Graphs — Advanced", items: ["Topological Sort (DFS + Kahn's BFS)", "Dijkstra's shortest path", "Union-Find / Disjoint Set", "Cycle detection"], resource: "NeetCode Graph playlist", leetcode: "Medium: Course Schedule (#207), Pacific Atlantic Water Flow (#417)" },
          { day: "Sat", title: "Tries", items: ["Trie node structure", "Insert and Search in Trie", "Prefix matching", "Use case: autocomplete"], resource: "NeetCode Trie playlist", leetcode: "Medium: Implement Trie (#208)" },
          { day: "Sun", title: "Review + System Design Intro", items: ["Watch: 'System Design Basics in 10 min' (YouTube)", "Read: What is a REST API?", "Apply 5 jobs", "Revise Week 3 notes"], resource: "Gaurav Sen YouTube", leetcode: "Retry any failed" },
        ],
      },
      {
        week: "Week 4", topic: "Algorithms — Core Patterns", color: "#1d4ed8",
        sessions: [
          { day: "Mon", title: "Sorting Algorithms", items: ["Bubble, Selection, Insertion (know time complexity)", "Merge Sort — implement from scratch", "Quick Sort — implement from scratch", "When to use which sort"], resource: "Visualgo.net for visualization", leetcode: "Medium: Sort Colors (#75), Merge Intervals (#56)" },
          { day: "Tue", title: "Binary Search", items: ["Classic binary search template", "Search in rotated sorted array", "Binary search on answer (min/max problems)", "Variations: first/last position"], resource: "NeetCode Binary Search", leetcode: "Easy: Binary Search (#704), Medium: Search Rotated Array (#33), Find Min in Rotated (#153)" },
          { day: "Wed", title: "Recursion & Backtracking", items: ["Recursion tree mental model", "Base case + recursive case", "Backtracking template", "Subsets, Permutations, Combinations"], resource: "Back to Back SWE playlist", leetcode: "Medium: Subsets (#78), Permutations (#46), Combination Sum (#39)" },
          { day: "Thu", title: "Greedy Algorithms", items: ["Greedy choice property", "Activity selection problem", "Jump Game", "Interval scheduling"], resource: "Striver's Greedy sheet", leetcode: "Medium: Jump Game (#55), Gas Station (#134)" },
          { day: "Fri", title: "Dynamic Programming — Intro", items: ["Memoization vs Tabulation", "Fibonacci DP (top-down + bottom-up)", "Climbing Stairs pattern", "0/1 Knapsack concept"], resource: "NeetCode DP playlist (start)", leetcode: "Easy: Climbing Stairs (#70), Medium: House Robber (#198), Coin Change (#322)" },
          { day: "Sat", title: "DP — 2D Patterns", items: ["Grid DP: Unique Paths", "Longest Common Subsequence", "Edit Distance", "DP on strings"], resource: "Aditya Verma DP playlist", leetcode: "Medium: Unique Paths (#62), Longest Common Subsequence (#1143)" },
          { day: "Sun", title: "Month 1 Full Review", items: ["Re-solve 1 problem from each week without help", "Write Big-O of every DS & Algorithm learned", "Update resume with any projects built", "Apply 5 jobs"], resource: "Your notes + LeetCode", leetcode: "Mixed review" },
        ],
      },
    ],
  },
  {
    month: "Month 2 — Backend + System Design",
    color: "#10b981",
    weeks: [
      {
        week: "Week 5", topic: "SQL & Databases", color: "#34d399",
        sessions: [
          { day: "Mon", title: "SQL Basics", items: ["SELECT, FROM, WHERE, ORDER BY, LIMIT", "AND, OR, NOT, IN, BETWEEN, LIKE", "NULL handling: IS NULL, COALESCE", "Practice on: SQLZoo or HackerRank SQL"], resource: "Mode SQL Tutorial (free)", leetcode: "Easy SQL: Combine Two Tables (#175)" },
          { day: "Tue", title: "SQL Joins & Aggregation", items: ["INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL JOIN", "GROUP BY + HAVING", "COUNT, SUM, AVG, MAX, MIN", "Practice: Find top 3 salaries per department"], resource: "SQLBolt.com (free interactive)", leetcode: "Medium SQL: Rank Scores (#178), Nth Highest Salary (#177)" },
          { day: "Wed", title: "SQL Advanced", items: ["Subqueries & CTEs (WITH clause)", "Window Functions: ROW_NUMBER, RANK, LAG, LEAD", "Indexes: why and when to use", "EXPLAIN query — reading query plans"], resource: "Use the Index, Luke (free)", leetcode: "Hard SQL: Department Top 3 Salaries (#185)" },
          { day: "Thu", title: "Database Design", items: ["Normalization: 1NF, 2NF, 3NF", "Primary Key, Foreign Key, Unique constraints", "ER diagrams — design a simple schema", "Transactions: ACID properties"], resource: "CMU Database Course (YouTube)", leetcode: "SQL practice set" },
          { day: "Fri", title: "NoSQL — MongoDB Basics", items: ["SQL vs NoSQL — when to use what", "MongoDB: documents, collections, BSON", "CRUD operations in MongoDB", "Aggregation pipeline basics"], resource: "MongoDB University (free course)", leetcode: "N/A — practice MongoDB shell" },
          { day: "Sat", title: "ORM & Connection Pooling", items: ["SQLAlchemy (Python) OR Sequelize (JS)", "Connect app to DB", "Run queries via ORM", "Build: simple CRUD API with DB"], resource: "SQLAlchemy docs / Traversy Sequelize", leetcode: "SQL review" },
          { day: "Sun", title: "Review + Apply", items: ["Write 10 SQL queries from scratch", "Apply 5 jobs (filter for backend/full-stack)", "LinkedIn: add SQL, PostgreSQL, MongoDB skills"], resource: "Your notes", leetcode: "2 SQL problems" },
        ],
      },
      {
        week: "Week 6", topic: "Web Dev & APIs", color: "#10b981",
        sessions: [
          { day: "Mon", title: "HTTP & REST APIs", items: ["HTTP methods: GET, POST, PUT, PATCH, DELETE", "Status codes: 200, 201, 400, 401, 403, 404, 500", "Request/Response headers", "REST principles (stateless, resource-based)"], resource: "MDN HTTP guide (free)", leetcode: "Easy: 2 DSA warm-up" },
          { day: "Tue", title: "Build REST API (Node.js/Python)", items: ["Node.js: Express setup OR Python: FastAPI/Flask", "Create endpoints: /users GET, POST, DELETE", "Middleware: logging, error handling", "Test with Postman or Thunder Client"], resource: "Traversy Express or TechWithTim Flask", leetcode: "Medium: 1 DSA" },
          { day: "Wed", title: "Authentication (JWT)", items: ["Session vs Token (JWT) auth", "bcrypt password hashing", "JWT: sign, verify, expiry", "Build: login + register endpoints with JWT"], resource: "Fireship JWT in 100 seconds + full tutorial", leetcode: "Medium: 1 DSA" },
          { day: "Thu", title: "React Basics (Frontend)", items: ["Components, Props, State (useState)", "useEffect hook — lifecycle equivalent", "Fetch API / Axios — call your own API", "Build: simple Todo app with React + your API"], resource: "Scrimba React course (free) or Bob Ziroll", leetcode: "Easy: 2 DSA" },
          { day: "Fri", title: "Deploy Your App", items: ["Deploy backend: Railway / Render / Cyclic (free)", "Deploy frontend: Vercel / Netlify (free)", "Connect env variables", "Put the live URL on your resume & GitHub"], resource: "Render.com docs, Vercel.com docs", leetcode: "Medium: 1 DSA" },
          { day: "Sat", title: "Portfolio Project Day", items: ["Build or polish 1 full-stack project", "Must have: GitHub repo + live demo + README", "Ideas: Job tracker app, expense manager, URL shortener", "Write project description for resume"], resource: "Your own creativity!", leetcode: "2 DSA review" },
          { day: "Sun", title: "Review + Apply", items: ["Write REST API concepts without notes", "Apply 5 jobs", "Add project to LinkedIn & GitHub pinned"], resource: "Your notes", leetcode: "1 Medium" },
        ],
      },
      {
        week: "Week 7", topic: "OS, Networking & CS Fundamentals", color: "#059669",
        sessions: [
          { day: "Mon", title: "Operating System Basics", items: ["Process vs Thread", "Context switching, scheduling algorithms", "Deadlock: what it is + 4 conditions", "Memory management: stack vs heap"], resource: "Gate Smashers OS playlist (YouTube)", leetcode: "Medium: 2 DSA" },
          { day: "Tue", title: "OS — Synchronization", items: ["Race conditions", "Mutex, Semaphore, Spinlock", "Producer-Consumer problem", "Common interview OS questions"], resource: "Gate Smashers + Concept Bytes", leetcode: "Medium: 1 DSA" },
          { day: "Wed", title: "Computer Networks", items: ["OSI Model: 7 layers, each layer's job", "TCP vs UDP — differences + use cases", "HTTP vs HTTPS — TLS handshake", "DNS: how domain names resolve"], resource: "Kurose Ross Networking (YouTube summary)", leetcode: "Easy: 2 DSA warm-up" },
          { day: "Thu", title: "Networks — Web Focused", items: ["What happens when you type google.com?", "WebSockets vs HTTP polling", "CDN: what it is and how it works", "Load balancer: round-robin, least connections"], resource: "ByteByteGo system design blog", leetcode: "Medium: 1 DSA" },
          { day: "Fri", title: "Docker Basics", items: ["What is containerization?", "Dockerfile: FROM, RUN, COPY, CMD", "docker build, docker run, docker-compose", "Containerize your API project"], resource: "TechWorld with Nana Docker (YouTube)", leetcode: "Easy: 2 DSA" },
          { day: "Sat", title: "Linux & Shell Scripting", items: ["Write a shell script: backup files", "cron jobs — schedule tasks", "Process management: ps, kill, top", "File permissions: chmod 755"], resource: "Linux Journey (linuxjourney.com free)", leetcode: "1 Medium DSA" },
          { day: "Sun", title: "Review + Apply", items: ["Answer: 'What happens when you type a URL?' in full detail", "Apply 5 jobs", "Add Docker to LinkedIn skills"], resource: "ByteByteGo blog", leetcode: "1 Medium" },
        ],
      },
      {
        week: "Week 8", topic: "System Design — Core", color: "#047857",
        sessions: [
          { day: "Mon", title: "System Design Framework", items: ["Step 1: Clarify requirements (functional + non-functional)", "Step 2: Estimate scale (users, data, QPS)", "Step 3: High-level design (boxes + arrows)", "Step 4: Deep dive components", "Step 5: Identify bottlenecks"], resource: "Gaurav Sen System Design playlist", leetcode: "Medium: 1 DSA" },
          { day: "Tue", title: "Scaling Databases", items: ["Vertical vs horizontal scaling", "Database sharding (hash-based, range-based)", "Replication: master-slave, multi-master", "Read replicas for heavy read traffic"], resource: "ByteByteGo Scale from Zero to Millions", leetcode: "Medium: 1 DSA" },
          { day: "Wed", title: "Caching", items: ["Why cache? Cache hit vs miss", "Redis vs Memcached", "Cache invalidation strategies: LRU, LFU, TTL", "Where to cache: client, CDN, server, DB"], resource: "System Design Primer (GitHub)", leetcode: "Medium: LRU Cache (#146)" },
          { day: "Thu", title: "Message Queues & Async", items: ["Why message queues? (decouple services)", "Kafka vs RabbitMQ basics", "Producer, Consumer, Topic, Partition", "Use case: notification system"], resource: "Gaurav Sen Kafka video", leetcode: "Medium: 1 DSA" },
          { day: "Fri", title: "Design URL Shortener", items: ["Requirements: shorten URL, redirect, analytics", "DB schema design", "Hashing strategy for short codes", "Handle collisions, expiry, high traffic"], resource: "Gaurav Sen URL Shortener video", leetcode: "Medium: 1 DSA" },
          { day: "Sat", title: "Design Twitter/Instagram Feed", items: ["Fan-out on write vs fan-out on read", "Timeline generation", "CDN for images/videos", "Rate limiting strategy"], resource: "ByteByteGo Design Twitter", leetcode: "Medium: 2 DSA" },
          { day: "Sun", title: "Review + Mock System Design", items: ["Do 1 mock system design verbally (record yourself)", "Apply 5 jobs", "Revise all 8 weeks of notes"], resource: "Pramp.com (free mock interviews)", leetcode: "1 Hard attempt" },
        ],
      },
    ],
  },
  {
    month: "Month 3 — Interview Ready",
    color: "#ec4899",
    weeks: [
      {
        week: "Week 9–10", topic: "Advanced DSA + DP Hard", color: "#f472b6",
        sessions: [
          { day: "Mon", title: "DP Hard Patterns", items: ["DP on trees", "Digit DP", "Bitmask DP", "Matrix chain multiplication"], resource: "Aditya Verma DP Hard", leetcode: "Hard: Burst Balloons (#312), Edit Distance (#72)" },
          { day: "Tue", title: "Graph Hard", items: ["Bellman-Ford algorithm", "Floyd Warshall", "Articulation points & bridges", "Strongly Connected Components (Kosaraju)"], resource: "Striver's Graph series (hard)", leetcode: "Hard: Word Ladder (#127), Alien Dictionary (#269)" },
          { day: "Wed–Sat", title: "Mixed Hard Practice", items: ["2 hard LeetCode per day", "Review every solution after solving", "Pattern recognition drill", "Time yourself: 30 min per problem"], resource: "LeetCode explore cards", leetcode: "10 hard problems across the week" },
          { day: "Sun", title: "Review", items: ["Pattern summary sheet", "Apply 5 jobs", "Mock interview with a friend or Pramp"], resource: "Your notes", leetcode: "Review failed problems" },
        ],
      },
      {
        week: "Week 11", topic: "Mock Interviews & HR Prep", color: "#db2777",
        sessions: [
          { day: "Mon", title: "Behavioral Interview Prep", items: ["STAR format: Situation, Task, Action, Result", "Stories for: leadership, conflict, failure, success", "Common Qs: 'Tell me about yourself', 'Why this company?'", "Write 5 STAR stories in your notes"], resource: "Jeff H Sipe HR interview YouTube", leetcode: "2 Medium warm-up" },
          { day: "Tue", title: "Mock Technical Interview #1", items: ["Use Pramp.com or Interviewing.io (free)", "Solve 2 DSA problems live on video", "Ask your interviewer for feedback", "Note what went wrong"], resource: "Pramp.com", leetcode: "Retry problems from mock" },
          { day: "Wed", title: "Resume & LinkedIn Deep Polish", items: ["Quantify every bullet: 'Reduced load time by 40%'", "ATS keywords: match job description words", "GitHub: pin 3 best projects with good READMEs", "LinkedIn: 500+ connections, good headline"], resource: "EnhanCV resume templates", leetcode: "2 Medium" },
          { day: "Thu", title: "Mock System Design #1", items: ["Design WhatsApp (messaging at scale)", "Speak out loud — interviewers hear your thinking", "Draw diagram on paper while explaining", "Time yourself: 45 min full design"], resource: "ByteByteGo Design Messaging App", leetcode: "1 Medium" },
          { day: "Fri", title: "Mock Technical Interview #2", items: ["Second mock on Pramp or with friend", "Focus on weak area from Mock #1", "Think out loud throughout", "Review feedback seriously"], resource: "Pramp.com", leetcode: "Retry failed" },
          { day: "Sat", title: "Full Day Interview Simulation", items: ["Morning: 2 hr DSA sprint (4 problems, timed)", "Afternoon: 1 hr System Design (pick a system)", "Evening: 30 min HR answers out loud", "Record yourself — watch it back"], resource: "Everything you've learned", leetcode: "4 timed problems" },
          { day: "Sun", title: "Rest + Job Blitz", items: ["Rest — light walk, no heavy studying", "Apply to 10 jobs today (batch apply)", "Follow up on week-old applications by email"], resource: "LinkedIn + Naukri", leetcode: "1 Easy (stay sharp)" },
        ],
      },
      {
        week: "Week 12", topic: "Final Prep & Mass Apply", color: "#be185d",
        sessions: [
          { day: "Mon–Fri", title: "Daily Grind Mode", items: ["Morning: 2 LeetCode (1 Medium, 1 Hard)", "Afternoon: 1 system design question verbally", "Evening: Apply to 5 jobs + 3 LinkedIn messages to recruiters", "Review 1 STAR story per day"], resource: "All resources", leetcode: "10 problems the week" },
          { day: "Sat", title: "Portfolio & GitHub Final Polish", items: ["All repos: clean README with demo GIF", "Deploy all projects (live links)", "Portfolio website with all projects + resume link", "LinkedIn profile 100% complete"], resource: "GitHub, Vercel, Netlify", leetcode: "2 Medium review" },
          { day: "Sun", title: "You Are Ready 🚀", items: ["Apply to 10 more jobs", "Rest, reflect, be confident", "Keep doing 2 LeetCode/day and 5 apps/day forever", "Offer will come — stay consistent"], resource: "Yourself 💪", leetcode: "2 Easy for confidence" },
        ],
      },
    ],
  },
];