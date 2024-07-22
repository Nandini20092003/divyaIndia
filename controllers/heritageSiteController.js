import HeritageSite from "../models/HeritageSite.js";

// Create new heritage site
export const createHeritageSite = async (req, res) => {
  const newHeritageSite = new HeritageSite(req.body);
  try {
    const savedHeritageSite = await newHeritageSite.save();
    res.status(200).json({
      success: true,
      message: "Successfully Created",
      data: savedHeritageSite,
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Failed to create. Try again." });
  }
};

// Update heritage site
export const updateHeritageSite = async (req, res) => {
  const id = req.params.id;

  try {
    const updatedHeritageSite = await HeritageSite.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: "Successfully Updated",
      data: updatedHeritageSite,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to update",
    });
  }
};

// Delete heritage site
export const deleteHeritageSite = async (req, res) => {
  const id = req.params.id;

  try {
    await HeritageSite.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "Successfully Deleted",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to delete",
    });
  }
};

// Get single heritage site
export const getSingleHeritageSite = async (req, res) => {
  const id = req.params.id;

  try {
    const heritageSite = await HeritageSite.findById(id).populate("reviews");
    res.status(200).json({
      success: true,
      message: "Successfully Fetched",
      data: heritageSite,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "Not Found",
    });
  }
};

// Get all heritage sites
export const getAllHeritageSites = async (req, res) => {
  const page = parseInt(req.query.page);

  try {
    const heritageSites = await HeritageSite.find({})
      .populate("reviews")
      .skip(page * 8)
      .limit(8);
    res.status(200).json({
      success: true,
      count: heritageSites.length,
      message: "Successfully Fetched All Data",
      data: heritageSites,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "Not Found",
    });
  }
};

// Get heritage sites by search
export const getHeritageSiteBySearch = async (req, res) => {
  const city = new RegExp(req.query.city, "i");
  const distance = parseInt(req.query.distance);
  const maxGroupSize = parseInt(req.query.maxGroupSize);

  try {
    const heritageSites = await HeritageSite.find({
      city,
      distance: { $gte: distance },
      maxGroupSize: { $gte: maxGroupSize },
    }).populate("reviews");
    res.status(200).json({
      success: true,
      count: heritageSites.length,
      message: "Successfully Fetched",
      data: heritageSites,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "Not Found",
    });
  }
};

// Get featured heritage site
export const getFeaturedHeritageSite = async (req, res) => {
  try {
    const heritageSites = await HeritageSite.find({ featured: true })
      .populate("reviews")
      .limit(8);
    res.status(200).json({
      success: true,
      message: "Successfully Fetched All Data",
      data: heritageSites,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "Not Found",
    });
  }
};

// Get heritage site counts
export const getHeritageSiteCount = async (req, res) => {
  try {
    const heritageSiteCount = await HeritageSite.estimatedDocumentCount();
    res.status(200).json({ success: true, data: heritageSiteCount });
  } catch (err) {
    res.status(404).json({ success: false, message: "Not Found" });
  }
};
