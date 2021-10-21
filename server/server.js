require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const path = require("path");
const http = require("http").Server(app);
const io = require("socket.io")(http);
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname));

//SETUP CORS
const cors = require("cors");
app.use(cors());

//setup for deployment :
app.use(express.static(path.join(__dirname, "../", "client", "build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../", "client", "build", "index.html"));
});

io.on("connection", () => {
  console.log("a user is connected");
});

//ROUTES
const adminRoute = require("./routes/adminRoutes");
const userRoute = require("./routes/userRoutes");
const postRoute = require("./routes/postRoutes");
const eventRoute = require("./routes/eventRoutes")
const messageRoute = require("./routes/messageRoutes");
app.use("/auth/admin", adminRoute);
app.use("/auth/users", userRoute);
app.use("/auth/posts", postRoute);
app.use("/auth/events", eventRoute);
app.use("/auth/messages", messageRoute);
app.use("/uploads", express.static(path.join(__dirname, "../", "uploads")));

//CONNECTING TO DB
mongoose.connect(process.env.MONGO_URI, (err) =>
  err ? console.error(err) : console.log("database is connected")
);

//CREATING SERVER
app.listen(process.env.PORT, (err) =>
  err ? console.error(err) : console.log("server is listening")
);
