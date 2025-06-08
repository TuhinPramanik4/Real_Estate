import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import propertyRoutes from "./routes/propertyRoutes.js";
import path from "path";

dotenv.config();


const app = express();
app.use(express.json());
app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));

// app.use("/uploads", express.static("uploads")); // To serve uploaded images


app.use(cors()); // allows all origins (only for dev)



mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB Connected"))
.catch(err => console.error(err));

app.use("/", propertyRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
