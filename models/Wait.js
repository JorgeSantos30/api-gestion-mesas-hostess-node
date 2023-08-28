import { Schema, model } from "mongoose";

const waitSchema = new Schema(
  {
    nameClient: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    numberStarters: {
      type: Number,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Wait = model("Wait", waitSchema);
