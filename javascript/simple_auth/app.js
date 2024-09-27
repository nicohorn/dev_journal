const express = require("express");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const path = require("path");

const app = express();
const PORT = 3000;
const ACCESS_TOKEN_SECRET = "access-token-secret";
const REFRESH_TOKEN_SECRET = "refresh-token-secret";

app.use(express.json());
app.use(cookieParser());
app.use(express.static("public"));

//Helper/util functions

function generateAccessToken(user) {
  return jwt.sign(user, ACCESS_TOKEN_SECRET, { expiresIn: "1m" });
}

function generateRefreshToken(user) {
  return jwt.sign(user, REFRESH_TOKEN_SECRET);
}

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.status(403).json({ error: "Forbidden" });
    req.user = user;
    next();
  });
}

// In-memory storage for refresh tokens (use a database in production)
let refreshTokens = [];

// Hardcoded user for demo purposes
const hardcodedUser = { id: 1, username: "nicohorn", password: "12345" };

app.post("/login", (req, res) => {
  // In a real app, you would validate credentials here

  const user = req.body;

  if (
    hardcodedUser.username == user.username &&
    hardcodedUser.password == user.password
  ) {
    const accessToken = generateAccessToken(hardcodedUser);
    const refreshToken = generateRefreshToken(hardcodedUser);

    refreshTokens.push(refreshToken);

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: true, // Enable in production
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    res.json({ accessToken });
  } else {
    res.json({ error: "Invalid credentials" });
  }
});

app.post("/token", (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  if (!refreshToken || !refreshTokens.includes(refreshToken)) {
    return res.sendStatus(403);
  }
  jwt.verify(refreshToken, REFRESH_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    const accessToken = generateAccessToken({
      id: user.id,
      username: user.username,
    });
    res.json({ accessToken });
  });
});

app.post("/logout", (req, res) => {
  //Removing the refresh token from memory in the server. In a production environment, we would be deleting or updating a database record.
  const refreshToken = req.cookies.refreshToken;
  refreshTokens = refreshTokens.filter((token) => token !== refreshToken);
  res.clearCookie("refreshToken");
  res.sendStatus(204);
});

app.get("/protected", authenticateToken, (req, res) => {
  //This endpoint is using a middleware function that runs before the callback function. The middleware function is responsible for securing the endpoint.
  res.json({ message: "This is protected data!", user: req.user });
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
