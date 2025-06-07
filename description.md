✅ Final MVP Spec Summary
🧠 Purpose:
Help users stay focused with a minimal, floating on-screen timer that also blocks distracting websites.

💡 Features Breakdown
Feature	Details
🕓 Timer	Pomodoro (25/5) + manual option (custom mins)
🔒 Site Blocker	List of websites to block; optional feature (basic input, regex match)
💬 Floating Bubble	Fixed-position circle (bottom-right); draggable anywhere on screen
⏯️ Controls	Start / Pause / Reset
💾 Persistent Settings	Save timer type, custom time, site list, and timer state in localStorage
🔊 Optional Alert	Play sound when timer ends (optional, low effort with HTML5 audio)

🛠 Tech Stack
Vanilla JS

HTML/CSS (Tailwind if you want quick layout, or plain CSS)

Optional: Make a version as a Chrome extension for blocking sites more reliably

🗂 Folder Structure (suggested)
cpp
Copy
Edit
focus-bubble/
│
├── index.html
├── style.css
├── app.js
└── assets/
    └── ding.mp3 (optional)
✏️ Next Step: Wireframe
Here's a super basic wireframe for layout clarity:

sql
Copy
Edit
+-------------------------------+
|                               |
|          [ Bubble ]          <-- Draggable div (25:00)
|        Start | Pause | ⟳      Controls inside the bubble
|          ⚙ Settings           Toggle: Pomodoro/manual, site list
+-------------------------------+
Settings panel (toggle on gear icon):

less
Copy
Edit
[Pomodoro] [Manual: __ min]

Blocked Sites:
facebook.com
youtube.com
[twitter.com]

[ Save Settings ]
✅ Your Task List Now
HTML structure

Bubble div

Settings panel (can toggle open)

Input for timer settings + blocked sites

JS logic

setInterval for timer

Pause/start/reset logic

Drag-and-drop bubble

localStorage: save & restore settings

Block site logic (just run window.location.href.includes() check)

CSS

Circle bubble

Button styling

Settings modal or floating panel