const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const TablesScheme = new mongoose.Schema(
  {
    customers: {
      type: String,
    },
    orders: {
      type: String,
    },
  },
  {
    versionKey: false,
  }
);

TablesScheme.plugin(mongoosePaginate);

module.exports = mongoose.model("tables", TablesScheme);
