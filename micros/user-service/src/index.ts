import app from "./app.js";

const PORT = Number(process.env?.["USER_SERVICE_PORT"]) || 3001;
const HOST = process.env?.["USER_SERVICE_HOST"] || "localhost";

// Start the User Service
app.listen(PORT, HOST, () => {
  console.log(`🚀🚀 Users service running on http://${HOST}:${PORT}`);
});