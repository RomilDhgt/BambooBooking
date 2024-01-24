import express from "express";
import { createRoom, deleteRoom, getAllRooms, getRoom, updateRoom, updateRoomAvail } from "../controllers/roomController.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

 // CREATE
router.post("/:hotelid",verifyAdmin, createRoom);

// UPDATE
router.put("/:id",verifyAdmin, updateRoom);
//Update Availiability
router.put("/avail/:id", updateRoomAvail)

// DELETE
router.delete("/:id/:hotelid",verifyAdmin, deleteRoom);

// GET
router.get("/:id", getRoom);

// GET ALL
router.get("/", getAllRooms);




export default router