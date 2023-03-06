const express = require("express");
const { config } = require("dotenv");
const dbConnect = require("./dbConnect.js");
const authRoutes = require("./routes/auth.js");
const refreshTokenRoutes = require("./routes/refreshToken.js");
const userRoutes = require("./routes/users.js");

const app = express();

config();
dbConnect();

app.use(express.json());

app.use("/api", authRoutes);
app.use("/api/refreshToken", refreshTokenRoutes);
app.use("/api/users", userRoutes);

const port = 6000;
app.listen(port, () => console.log(`Listening on port ${port}...`));