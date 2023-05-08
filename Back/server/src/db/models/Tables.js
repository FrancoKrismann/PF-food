const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const TablesScheme = new mongoose.Schema(
  {
    diners: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
      autopopulate: true,
    },

    orders: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Posts",
        autopopulate: true,
      },
    ],

    capacity: {
      type: Number,
    },
  },
  {
    versionKey: false,
  }
);

CursosScheme.plugin(mongoosePaginate);
CursosScheme.plugin(require("mongoose-autopopulate"));

module.exports = mongoose.model("Tables", TablesScheme);
