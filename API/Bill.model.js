const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Bill = new Schema(
  {
    tenkhach: {
      type: String
    },
    tensp: {
      type: String
    },
    gia: {
      type: Number
    },
    quantity: {
      type: Number
    },
    hang: {
      type: String
    },
    ngay: {
      type: Date.now()
    },
    tongtien: {
      type: Number
    }
  },
  {
    collection: "bills"
  }
);

module.exports = mongoose.model("bills", Bill);
