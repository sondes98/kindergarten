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

//socket:

/* io.on("connection", () => {
  console.log("a user is connected");
}); */

//ROUTES
const userRoute = require("./routes/userRoutes");
const postRoute = require("./routes/postRoutes");
const eventRoute = require("./routes/eventRoutes");

app.use("/auth/users", userRoute);
app.use("/auth/posts", postRoute);
app.use("/auth/events", eventRoute);

// const CONNECTION_URL_local = "mongodb://localhost:27017/test";
const CONNECTION_URL_docker = "mongodb://admin:password@mongodb"
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL_docker, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server Running on Port: http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set("useFindAndModify", false);
