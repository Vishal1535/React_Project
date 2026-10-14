import mongoose from "mongoose";

const listingSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
    },

    host: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    // ✅ FLEXIBLE IMAGES (BEST APPROACH)
    images: {
      type: [String], // Cloudinary URLs
      default: [],
      validate: {
        validator: function (arr) {
          return arr.length > 0;
        },
        message: "At least one image is required",
      },
    },

    rent: {
      type: Number,
      required: true,
    },

    city: {
      type: String,
      required: true,
      trim: true,
    },

    landMark: {
      type: String,
      required: true,
      trim: true,
    },

    // ✅ CATEGORY (kept required for filtering/search)
    category: {
      type: String,
      required: true,
      trim: true,
      default: "general",
    },

    isBooked: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Listing = mongoose.model("Listing", listingSchema);

export default Listing;