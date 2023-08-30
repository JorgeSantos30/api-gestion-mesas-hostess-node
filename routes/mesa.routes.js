import api from "./router.js";
import {
  deleteTable,
  getTable,
  getTables,
  register,
} from "../controllers/tableController.js";

/**
 * POST /api/v1/register-table   REGISTRAR MESA
 */
api.post("/register-table", register);

/**
 * GET /api/v1/tables   OBTENER TODAS LAS MESAS
 */

api.get("/tables", getTables);

/**
 * GET /api/v1/get-table/:id    OBTENER MESA POR ID
 */

api.get("/get-table/:id", getTable);

/**
 * PATCH/PUT /api/v1/get-table/:id    ACTUALIZAR MESA
 */

/**
 * DELETE /api/v1/deleteById/:id     ELIMINAR MESA
 */

api.delete("/deleteById/:id", deleteTable);

export default api;
