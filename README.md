# MusicApp

A simple music player application with real-time synchronization built with Node.js, Express, and Socket.IO. This project was created as a learning exercise for building web servers and clients in JavaScript.

## Features

- Play different sound effects with a click of a button
- Real-time synchronization across multiple clients
- Simple and intuitive user interface

## Technologies Used

- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **Socket.IO** - Real-time bidirectional event-based communication
- **jQuery** - JavaScript library for DOM manipulation

## Project Structure

```
musicapp/
├── public/            # Static assets
│   ├── *.mp3          # Sound files
│   ├── index.html     # Main HTML file
│   ├── jquery.js      # jQuery library
│   └── script.js      # Client-side JavaScript
├── src/               # Source code
│   └── server.js      # Server implementation
├── package.json       # Project metadata and dependencies
└── README.md          # Project documentation
```

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/musicapp.git
   cd musicapp
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the server:
   ```
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3333`

## How It Works

The application uses Socket.IO to establish a real-time connection between the server and clients. When a user clicks a "Play" button, the client emits a "play" event to the server with the ID of the sound to play. The server then broadcasts this event to all connected clients, causing them to play the same sound simultaneously.

## Learning Outcomes

This project demonstrates:
- Setting up a basic Express.js server
- Serving static files
- Implementing real-time communication with Socket.IO
- Handling client-side events
- Playing audio in the browser

## Course Information

This project was developed as part of my self-learning journey through the **Full Stack Web Development with NodeJS Master Course** by Coding Blocks. The course provides comprehensive coverage of:

- HTML, CSS, and JavaScript fundamentals
- Node.js and Express.js for backend development
- Real-time communication with WebSockets (Socket.IO)
- Database integration (MySQL, MongoDB)
- Version control and deployment
- Security best practices

**Course Details:**
- **Instructor:** Arnav Gupta (@ChampionSwimmer)
- **Platform:** Coding Blocks Online
- **Rating:** 4.35/5.0 (401 ratings)
- **Course Link:** [Full Stack Web Development with NodeJS Master Course](https://online.codingblocks.com/courses/web-development-online-course)

The course follows a project-based learning approach, enabling hands-on experience in building full-fledged web applications from scratch.

Feel free to use this project as a starting point for your own web applications!

## 👤 Maintainer

**Shristi Pathak**
- LinkedIn: [@shristi-pathak](https://www.linkedin.com/in/shristi-pathak/)
