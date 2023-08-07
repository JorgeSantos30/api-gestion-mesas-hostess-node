import "dotenv/config";
import app from "./app.js";
import connectDb from "./db/mongodb.js";
import config from "./config/config.js";

const { appConfig, dbConfig } = config;

async function initApp(appConfig, dbConfig) {
  try {
    await connectDb(dbConfig);
    app.listen(appConfig.port, () =>
      console.log(`Listen on port ${appConfig.port}`)
    );
  } catch (e) {
    console.error(e);
    process.exit(0);
  }
}

initApp(appConfig, dbConfig);
