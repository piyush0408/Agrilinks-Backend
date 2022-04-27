const mongoose = require("mongoose");

const reportDetailsSchema = new mongoose.Schema(
  {
    marketID: {
      type: String,
      required: [true, "Please Enter Market ID"],
    },
    marketName: {
      type: String,
      required: [true, "Please Enter Market Name"],
    },
    cmdtyID: {
      type: String,
      required: [true, "Please Enter Commodity ID"],
    },
    marketType: {
      type: String,

      default: "Mandi",
    },

    cmdtyName: {
      type: String,
      required: [true, "Please Enter Commodity Name"],
    },

    priceUnit: {
      type: String,

      default: "Kg",
    },

    price: {
      type: Number,
      required: [true, "Please Enter Price"],
    },
    users: [
      {
        type: String,
      },
    ],
    timestamp: {
      type: String,
    },
  },
  { versionKey: false }
);

module.exports = mongoose.model("ReportDetails", reportDetailsSchema);
