import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema.Types;

const itemSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    barcode: { type: Number, required: true },
    price: { type: Number, required: true },
    qty: {type: Number}
  },
  {
    timestamps: true,
  }
);

const cartSchema = new mongoose.Schema({
  user: { type: ObjectId, ref: "User", required: true },
  items: [itemSchema],
});

export const Cart = mongoose.model("Cart", cartSchema);
