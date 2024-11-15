import mongoose from "mongoose";

const getMonthName = (monthIndex) => {
  switch (monthIndex) {
    case 0:
      return "January";
    case 1:
      return "February";
    case 2:
      return "March";
    case 3:
      return "April";
    case 4:
      return "May";
    case 5:
      return "June";
    case 6:
      return "July";
    case 7:
      return "August";
    case 8:
      return "September";
    case 9:
      return "October";
    case 10:
      return "November";
    case 11:
      return "December";
    default:
      return "";
  }
};

const TransactionSchema = new mongoose.Schema({
  transactionId: {
    type: Number,
    required: true,
  },
  date: {
    day: {
      type: Number,
      default: new Date().getDate(),
    },
    month: {
      type: String,
      default: getMonthName(new Date().getMonth()),
    },
    year: {
      type: Number,
      default: new Date().getFullYear(),
    },
  },
  color: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  paymentType: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: String,
    default: new Date().toLocaleTimeString(),
  },
});

const Transaction = mongoose.model("transactions", TransactionSchema);

export default Transaction;
