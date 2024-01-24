import express from "express";
import Hotel from "../models/Hotel.js"
import { countByCity, countByType, createHotel, deleteHotel, getAllHotel, getHotel, getHotelRooms, updateHotel } from "../controllers/hotelController.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// CREATE
router.post("/", createHotel);

// UPDATE
router.put("/:id",verifyAdmin, updateHotel);

// DELETE
router.delete("/:id",verifyAdmin, deleteHotel);

// Count Hotels by Type
router.get("/countByType", countByType);

// Get hotel ID
router.get("/room/:id", getHotelRooms)

// Count Hotels by City
router.get("/countByCity", countByCity);

// GET
router.get("/find/:id", getHotel);

// GET ALL
router.get("/", getAllHotel);

export default router