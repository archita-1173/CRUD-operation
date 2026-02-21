# CRUD Operation MERN Stack

Simple MERN stack CRUD app (client + server).

## Setup

1. Install server dependencies and start server:

```bash
cd server
npm install
node index.js
```

Server defaults to port 3001.

2. Install client dependencies and start client:

```bash
cd ../client
npm install
npm run dev
```

The client uses Vite; it will open on port 5173 by default.

## Notes

- Update API base URLs in the client if your server runs on a different host/port.
- Ensure MongoDB is running and connection URI in `server/index.js` is correct.

## Git — commit & push

If you haven't set a remote, add one and push:

```bash
git add .
git commit -m "Fix UpdateUsers and add README"
# add remote if needed
git remote add origin <your-git-remote-url>
git branch -M main
git push -u origin main
```

Replace `<your-git-remote-url>` with your GitHub repo URL.
