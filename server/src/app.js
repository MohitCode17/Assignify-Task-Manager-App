import express from "express";

const app = express();

// TEST API ROUTE
app.get("/test", (req, res) => {
  res.send("Test Passed!");
});

export { app };
