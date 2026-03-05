const express = require("express");
const router = express.Router();
const Application = require("../models/Application");

// CREATE
router.post("/", async (req, res) => {
  try {
    const newApp = await Application.create(req.body);
    res.status(201).json(newApp);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// READ ALL
router.get("/", async (req, res) => {
  const apps = await Application.find();
  res.status(200).json(apps);
});

// READ ONE
router.get("/:id", async (req, res) => {
  try {
    const app = await Application.findById(req.params.id);
    if (!app) return res.status(404).json({ error: "Not found" });
    res.json(app);
  } catch {
    res.status(400).json({ error: "Invalid ID" });
  }
});

// UPDATE
router.put("/:id", async (req, res) => {
  try {
    const updated = await Application.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updated) return res.status(404).json({ error: "Not found" });
    res.json(updated);
  } catch {
    res.status(400).json({ error: "Update failed" });
  }
});

// DELETE
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Application.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: "Not found" });
    res.json({ message: "Deleted successfully" });
  } catch {
    res.status(400).json({ error: "Delete failed" });
  }
});

module.exports = router;
