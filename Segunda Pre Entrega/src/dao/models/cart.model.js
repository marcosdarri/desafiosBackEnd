import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});

const cartSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
    },
    products: [productSchema],
  },
  { timestamps: true }
);

export default mongoose.model("Cart", cartSchema);
