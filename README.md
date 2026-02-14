# ❤️ Valentine Console - a digital love letter

Valentine console is an interactive legacy Vue.js application that creates personalised Valentine's day experience with sweet messages, sound effects and an eyecatching purple aesthetic.

# ✨ Features

    Interactive YES/NO Buttons - Playful response system with multiple messages

    Sweet Message Buttons - 8 different love messages (A, B, C, X, Y, Z, HEART1, HEART2)

    Sound Effects - Audio feedback for button clicks

    Message History Log - Records all displayed messages with timestamps

    Responsive Design - Works on mobile, tablet, and desktop

    Landscape Mode Support - Optimized for all orientations

    Purple Theme - Beautiful gradient background with glassmorphism effects

# 🛠️ Technologies Used

    Vue.js 2 - Frontend framework

    CSS3 - Styling with Flexbox/Grid

    Font Awesome - Heart icons

    Web Audio API - Sound effects

# 🗂️ Project structure
valentine-console/
├── public/
│   └── index.html
├── src/
│   ├── assets/
│   │   └── sounds/
│   │       ├── AnimeWOW.mp3
│   │       ├── fartSound.mp3
│   │       └── MouseClick.mp3
│   ├── components/
│   │   ├── TopDisplay.vue
│   │   ├── Buttons.vue
|   |   ├── Footer.vue
│   │   └── BottomDisplay.vue
│   ├── views/
│   │   └── ValentineConsole.vue
│   ├── App.vue
│   └── main.js
└── package.json

# 🎮 How It Works
The Flow:

    1. Start Screen: "WILL YOU BE MY VALENTINE ??? 💌"

    2. Click NO: Cycles through funny rejection messages

    3. Click YES: Unlocks all sweet message buttons

    4. Click Letter Buttons: Displays personalized love messages

    5. Message Log: All messages saved with timestamps

# Button Messages:
Button	Message
A	abundance of affection 💖
B	be mine forever? you dont have a choice.💕
C	cat dads are so in season 🌹 RAHHHH
X	i love the way you show up for me 💞
Y	thank you for being my home in human form ❤️‍🩹
Z	thank you for being yourself.💞
HEART1	you're worth every mile between us 💖
HEART2	im yours. no refunds 💝

# 🎨 Color Palette
Primary Purple: #4C1D95
Light Purple: #C9A8FF
Hover Purple: #D8B4FE
Border Purple: #bc69ff
Text Purple: #9970db
Background Gradient: #F9F7FF → #5915c0

# 🔧 Installation

# Clone the repository
git clone https://github.com/yourusername/valentine-console.git

# Navigate to project
cd valentine-console

# Install dependencies
npm install

# Add sound files to src/assets/sounds/
# (AnimeWOW.mp3, fartSound.mp3, MouseClick.mp3)

# Run development server
npm run serve

# Build for production
npm run build

# 🎯 Usage

    Open http://localhost:8080 in your browser

    Click "NO" for funny responses

    Click "YES" to unlock all features

    Click letter buttons to display sweet messages

    Watch the message log fill up with your conversation

# 🔊 Sound Files Needed

Place these MP3 files in src/assets/sounds/:

    AnimeWOW.mp3 - Plays when YES clicked

    fartSound.mp3 - Plays when NO clicked

    MouseClick.mp3 - Plays for letter buttons

# 📄 License

© 2026 Khanya Freddie | All rights reserved

# 🙏 Acknowledgments

    Font Awesome for the heart icons

    Vue.js team for the amazing framework

    Sound effects from [your source here]