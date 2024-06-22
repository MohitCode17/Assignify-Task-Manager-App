import { app } from "./src/app.js";
import { config } from "./src/config/env-config.js";
import { connectDB } from "./src/config/db.js";

const startServer = async () => {
  await connectDB();

  const port = config.port;
  app.listen(port, () => {
    console.log(`Server running at port ${port}`);
  });
};

startServer();
