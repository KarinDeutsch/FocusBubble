✅ Final MVP Spec Summary
🧠 Purpose:
Help users stay focused with a minimal, floating on-screen timer that also blocks distracting websites.

💡 Features Breakdown
Feature	Details
🕓 Timer	Pomodoro (25/5) + manual option (custom mins) *done*
🔒 Site Blocker	List of websites to block; optional feature (basic input, regex match)
💬 Floating Bubble	Fixed-position circle (bottom-right); draggable anywhere on screen *done*
⏯️ Controls	Start / Pause / Reset *done*
💾 Persistent Settings	Save timer type, custom time, site list, and timer state in localStorage
🔊 Alert	Play sound when timer ends *done*

Features for Upgrade:
- Make a version as a Chrome extension for blocking sites more reliably
POMODORO EXTENSION — FUTURE FEATURES LIST

1. Auto-load blocked sites into textarea
2. Long Breaks after X Pomodoros
3. Custom Sound Selection
4. SVG Progress Ring (uncomment + finish)
5. Active Site Blocking only during Work Phase
6. Pomodoro History / Statistics
7. Cloud Sync via Google
8. Dark / Light Mode
9. Motivational Quotes Display
10. Auto-Start Next Phase (toggle)
11. Pomodoro Goal Setting
12. Browser Notifications
13. Keyboard Shortcuts
14. Manual Block List Toggle while running
15. Optional Focus Music or Ambient Sounds

🔧 Update 1: Site Blocker Polish & Auto Load
Auto-load blocked sites into settings textarea.

Block sites only during Work Phase.

Manual Block List Toggle while running.

👉 Purpose: Fully functional & intuitive blocking system.

🔊 Update 2: Sound & Visual Experience
Custom Sound Selector / Upload.

SVG Progress Ring (finish and uncomment).

Optional Focus Music / Ambient Sound.

👉 Purpose: Make the timer enjoyable, visual, motivating.

📊 Update 3: Pomodoro Cycle & Goals
Long Breaks after X Pomodoros.

Pomodoro Goal Setting (daily target bar).

Auto-Start Next Phase option.

👉 Purpose: Full Pomodoro Cycle support — becomes "real" Pomodoro tool, not just timer.

🌟 Update 4: Looks, Mood & Style
Dark / Light Mode toggle.

Motivational Quotes Display.

Browser Notifications.

👉 Purpose: Feels modern, beautiful, friendly to use all day.

☁️ Update 5: Advanced & Cloud Features
Pomodoro History / Statistics page.

Cloud Sync via Google Account.

Keyboard Shortcuts (start/pause/reset).

👉 Purpose: For pro users, multi-device support, serious productivity nerds.

Optional Future Mega Update (if ever needed):
Full version as a Chrome Extension in the Chrome Web Store.

Monetize via "Pro" features.

Integrate Google Tasks or Notion API.

🛠 Tech Stack
Vanilla JS
HTML/CSS (Tailwind if you want quick layout, or plain CSS)

✅ Final Bubble Layout
🟢 Top

Small session type label (e.g. “Work”, “Break”) *done*

Settings icon (top right corner) *done*

🔵 Center

Big timer display (25:00) *done*

🟠 Below Timer

Progress dots (e.g. Pomodoro session count) *done*

🔴 Bottom

Start / Pause / Reset buttons *done*

Mute toggle (bottom left or bottom right corner) *done*

