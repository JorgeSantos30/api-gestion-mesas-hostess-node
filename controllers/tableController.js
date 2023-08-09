import { Table } from "../models/Table.js";

//REGISTRO DE MESA
async function register(req, res, next) {
  try {
    const { nameTable, numberStarters, status, area } = req.body;

    const table = Table({
      nameTable,
      numberStarters,
      status,
      area,
    });

    const tableStored = await table.save();

    res.status(201).send("Agregada");

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

export { register, getTables, getTable };
