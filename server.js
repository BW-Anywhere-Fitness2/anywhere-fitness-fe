const express = require("express");
const bodyParser = require("body-parser");
const CORS = require("cors");


const app = express();
const token =
  "ahuBHejkJJiMDhmODZhZi0zaeLTQ4ZfeaseOGZgesai1jZWYgrTA07i73Gebhu98";

app.use(bodyParser.json());
app.use(CORS());

let users = [
  {
    name: 'Brainey',
    age: 200,
    height: '5cm',
    id: 0
  }
];

let nextId = 12;

function authenticator(req, res, next) {
  const { authorization } = req.headers;
  if (authorization === token) {
    next();
  } else {
    res.status(403).json({ error: "User must be logged in to do that." });
  }
}

app.post("/api/login", (req, res) => {
  const { username, password } = req.body;
  if (username === "Lambda School" && password === "i<3Lambd4") {
    req.loggedIn = true;
    setTimeout(() => {
      res.status(200).json({
        payload: token
      });
    }, 1000);
  } else {
    res
      .status(403)
      .json({ error: "Username or Password incorrect. Please see Readme" });
  }
});

app.get("/users", authenticator, (req, res) => {
  res.send(users);
});

app.post("/users", authenticator, (req, res) => {
  if (req.body.user !== undefined && req.body.code !== undefined) {
    const newuser = req.body;
    newuser.id = nextId;
    users.push(newuser);
  }
  nextId = nextId + 1;
  res.status(201).json(users);
});

app.put("/users/:id", authenticator, (req, res) => {
  if (!req.params.id)
    res.status(400).send("Your request is missing the color id");
  if (req.body.id === undefined || !req.body.user || !req.body.code) {
    res
      .status(422)
      .send("Make sure your request body has all the fields it needs");
  }
  users = users.map(user => {
    if (`${user.id}` === req.params.id) {
      return req.body;
    }
    return user;
  });
  res.status(200).send(req.body);
});

app.delete("/users/:id", authenticator, (req, res) => {
  if (!req.params.id)
    res.status(400).send("Your request is missing the color id");
  users = users.filter(users => `${users.id}` !== req.params.id);
  res.status(202).send(req.params.id);
});

app.get("/", function(req, res) {
  res.send("App is working 👍");
});

app.listen(5000, () => {
  console.log("Server listening on port 5000");
});
