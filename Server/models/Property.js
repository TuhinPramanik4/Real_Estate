import mongoose from "mongoose";

const propertySchema = new mongoose.Schema({
  title: String,
  price: Number,
  location: String,
  description: String,
  category: {
    type: String,
    enum: ['Rent', 'Buy', 'PG', 'Plot'],
    required: true
  },
  imageUrl: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Property", propertySchema);
