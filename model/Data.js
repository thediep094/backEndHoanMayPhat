const mongoose = require("mongoose");

// Define the Battery schema
const dataSchema = new mongoose.Schema({
  UPS: [
    {
      "Tên Bình": String,
      "Ngày đo kiểm": String,
      "Nội trở đo kiểm": Number,
      "Điện áp đo kiểm": Number,
      "Nhiệt độ đo kiểm": Number,
      "Hãng UPS": String,
      "Tổ ắc quy": String,
      "Nhà sản xuất": String,
      "Xuất xứ": String,
      "Model ắc quy": String,
      "Thời gian lắp đặt": String,
      "Số năm sử dụng": Number,
      "Kích thước (mm)": String,
    },
  ],
});

// Create the Battery model
const Battery = mongoose.model("Data", dataSchema);

module.exports = Battery;
