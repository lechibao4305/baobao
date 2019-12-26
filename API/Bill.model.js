const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Bill = new Schema(
  {
    ten: {
      type: String
    },
    hinh: {
      type: String
    },
    mota: {
      type: String
    },
    gia: {
      type: Number
    },
    hang: {
      type: String
    },
    trangthai: {
      type: Number
    }
  },
  {
    collection: "bills"
  }
);

module.exports = mongoose.model("bills", Bill);
