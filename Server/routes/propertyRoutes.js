import express from "express";
import multer from "multer";
import Property from "../models/Property.js";
import path from "path";

const router = express.Router();

// Multer config
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads/");
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  }
});

const fileFilter = (req, file, cb) => {
  const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Invalid file type. Only JPG/PNG allowed."), false);
  }
};

const upload = multer({ storage, fileFilter });

router.get("/api/properties", async (req, res) => {
  try {
    const properties = await Property.find().sort({ createdAt: -1 }); // latest first
    res.status(200).json(properties);
  } catch (error) {
    console.error("Error fetching properties:", error);
    res.status(500).json({ error: "Server error while fetching properties" });
  }
});
// POST /api/properties
router.post("/api/properties", upload.single("image"), async (req, res) => {
  try {
    const { title, price, location, description, category } = req.body;

    const imageUrl = `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`;

    const property = new Property({
      title,
      price,
      location,
      description,
      category,
      imageUrl,
    });

    await property.save();
    res.status(201).json({ message: "Property created!", property });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
