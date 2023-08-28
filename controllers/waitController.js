import { Wait } from "../models/Wait.js";

//REGISTRO DE ESPERA
async function addWait(req, res, next) {
  try {
    const { nameClient, numberStarters } = req.body;

    const existingWait = await Wait.findOne({ nameClient });

    if (existingWait) {
      return res.status(400).send("Ya existe un cliente con el mismo nombre");
    }

    const wait = Wait({
      nameClient,
      numberStarters,
    });

    const waitStored = await wait.save();

    res.status(201).send("Cliente agregado a la lista");
    console.log(waitStored);
  } catch (error) {
    console.log(error);
    next(error);
  }
}

/**
 * OBTENER TODOS LAS ESPERAS
 */

async function getWaits(req, res) {
  try {
    const waits = await Wait.find();

    res.status(200).send({ waits });
  } catch (error) {
    console.error(error);
    res.status(400).send({ error: error });
  }
}

export { addWait, getWaits };
