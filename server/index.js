import { app } from "./src/app.js";
import { config } from "./src/config/env-config.js";

const startServer = () => {
  const port = config.port;

  app.listen(port, () => {
    console.log(`Server running at port ${port}`);
  });
};

startServer();
