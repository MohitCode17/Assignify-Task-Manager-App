import express from "express";
import { errorMiddleware } from "./middlewares/error.js";

const app = express();

// TEST API ROUTE
app.get("/test", (req, res) => {
  res.send("Test Passed!");
});

// ERROR HANDLING MIDDLEWARE
app.use(errorMiddleware);

export { app };
