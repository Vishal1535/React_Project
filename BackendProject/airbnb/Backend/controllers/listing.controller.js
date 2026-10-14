import uploadOnCloudinary from "../configs/cloudany.js";
import Listing from "../modules/listing.model.js";
import User from "../modules/user.module.js";

const addListing = async (req, res) => {
  try {
    console.log(req.body);
    console.log(req.files);
    console.log(req.id);

    const host = req.id;

    const { title, description, rent, city, landMark, category } = req.body;

    if (!req.files) {
      return res.status(400).json({ message: "No files found" });
    }

    // ✅ build images array
    const images = [];

    const img1 = req.files?.image1?.[0]?.path;
    const img2 = req.files?.image2?.[0]?.path;
    const img3 = req.files?.image3?.[0]?.path;

    if (img1) {
      const url = await uploadOnCloudinary(img1);
      if (url) images.push(url);
    }

    if (img2) {
      const url = await uploadOnCloudinary(img2);
      if (url) images.push(url);
    }

    if (img3) {
      const url = await uploadOnCloudinary(img3);
      if (url) images.push(url);
    }

    if (images.length === 0) {
      return res.status(400).json({
        message: "At least one image required"
      });
    }

    const listing = await Listing.create({
      title,
      description,
      host,
      images,
      rent,
      city,
      landMark,
      category
    });

    return res.status(201).json(listing);

  } catch (err) {
    console.log("ERROR:", err);
    return res.status(500).json({ message: err.message });
  }
};

export default addListing;