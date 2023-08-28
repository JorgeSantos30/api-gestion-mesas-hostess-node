import api from "./router.js";
import { addWait, getWaits } from "../controllers/waitController.js";

/**
 * POST /api/v1/add-wait   REGISTRAR CLIENTE EN LISTA DE ESPERA
 */
api.post("/add-wait", addWait);

/**
 * GET /api/v1/waits   OBTENER TODAS LAS ESPERAS
 */

api.get("/waits", getWaits);

export default api;
