import express from "express";
import tableRoutes from "./routes/mesa.routes.js";
import cors from "cors";

const app = express();

// MIDDLEWARE
app.use(express.json());

const whiteList = [process.env.ORIGIN1];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || whiteList.includes(origin)) {
        return callback(null, origin);
      }
      return callback("Error de CORS origin: " + origin + " No autorizado!");
    },
  })
);

//ROUTES MIDDLEWARE
app.use("/api/v1", tableRoutes);

export default app;
