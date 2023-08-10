import { Schema, model } from "mongoose";

const tableSchema = new Schema(
  {
    nameTable: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    numberStarters: {
      type: Number,
      required: true,
      trim: true
    },
    status: {
      type: String,
      required: true,
      trim: true,
    },
    area: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Table = model("Table", tableSchema);
