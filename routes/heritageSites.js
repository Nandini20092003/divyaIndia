import express from "express";
import {
  createHeritageSite,
  deleteHeritageSite,
  getAllHeritageSites,
  getFeaturedHeritageSite,
  getSingleHeritageSite,
  getHeritageSiteBySearch,
  getHeritageSiteCount,
  updateHeritageSite,
} from "../controllers/heritageSiteController.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// Create new heritage site
router.post("/", verifyAdmin, createHeritageSite);

// Update heritage site
router.put("/:id", verifyAdmin, updateHeritageSite);

// Delete heritage site
router.delete("/:id", verifyAdmin, deleteHeritageSite);

// Get single heritage site
router.get("/:id", getSingleHeritageSite);

// Get all heritage sites
router.get("/", getAllHeritageSites);

// Get heritage site by search
router.get("/search/getHeritageSiteBySearch", getHeritageSiteBySearch);

// Get featured heritage site
router.get("/search/getFeaturedHeritageSites", getFeaturedHeritageSite);

// Get heritage site count
router.get("/search/getHeritageSiteCount", getHeritageSiteCount);

export default router;
