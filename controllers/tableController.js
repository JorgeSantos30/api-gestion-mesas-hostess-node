import { Table } from "../models/Table.js";

//REGISTRO DE MESA
async function register(req, res, next) {
  try {
    const { nameTable, numberStarters, status, area } = req.body;

    const existingTable = await Table.findOne({ nameTable });

    if (existingTable) {
      return res.status(400).send("Ya existe una mesa con el mismo nombre.");
    }

    const table = Table({
      nameTable,
      numberStarters,
      status,
      area,
    });

    const tableStored = await table.save();

    res.status(201).send("Mesa agregada");

    console.log(tableStored);
  } catch (error) {
    console.log(error);
    next(error);
  }
}

/**
 * OBTENER TODOS LAS MESAS
 */

async function getTables(req, res) {
  try {
    const tables = await Table.find();

    res.status(200).send({ tables });
  } catch (error) {
    console.error(error);
    res.status(400).send({ error: error });
  }
}

/**
 * OBTENER MESA POR ID
 */

async function getTable(req, res) {
  const table = await Table.findById(req.params.id);

  if (table) {
    res.json(table);
  } else {
    return res.status(404).json({
      message: "La mesa no ha sido encontrada",
    });
  }
}

/**
 * ELIMINAR MESA
 */

async function deleteTable(req, res) {
  try {
    const table = await Table.findByIdAndRemove(req.params.id);

    if (!table) return res.status(404).json("La mesa no existe");

    return res.json({ message: "La mesa se ha eliminado correctamente" });
  } catch (error) {
    console.log(error);
  }
}

async function editTable(req, res) {
  try {
    const { id } = await req.params;
    const { nameTable, numberStarters, status, area } = req.body;

    const table = await Table.findById(id);

    if (!table) return res.status(404).json({ error: "No existe la tabla" });

    table.nameTable = nameTable;
    table.numberStarters = numberStarters;
    table.status = status;
    table.area = area;
    await table.save();

    return res.json({ table });
  } catch (error) {
    console.log(error);
  }
}

export { register, getTables, getTable, deleteTable, editTable };
