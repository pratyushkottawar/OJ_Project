const express = require("express");
const passport = require("passport");
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");
require("./auth");
require("dotenv").config();
var session = require("express-session");

const problemsRoutes = require("./Routes/problems");

// Middleware
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, "client")));

// Middleware for Authentication
app.use(
  session({
    secret: "mysecret",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile"] })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/login",
  }),
  (req, res) => {
    res.redirect("http://localhost:3000/homepage");
  }
);

app.get("/", (req, res) => {
  res.json({ online: "compiler" });
});

app.use("/problems", problemsRoutes);

// Connecting to MongoDB and listening to requirements
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(5000, () => {
      console.log("MONGODB connected and  server is running on port 5000");
    });
  })
  .catch((error) => {
    console.log(error);
  });
