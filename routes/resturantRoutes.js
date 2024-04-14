const express = require("express");

const authMiddleware = require("../middlewares/authMiddleware");
const {
  createResturantController,
  getAllResturantController,
  getResturantByIdController,
  deleteResturantController,
} = require("../controllers/resturantController");

const router = express.Router();

router.post("/create", authMiddleware, createResturantController);

router.get("/getAll", getAllResturantController);

router.get("/get/:id", getResturantByIdController);

router.delete("/delete/:id", authMiddleware, deleteResturantController);

module.exports = router;
