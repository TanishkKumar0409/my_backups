import Transaction from "../Modals/TransactionModal.js";
export const addTransaction = async (req, res) => {
  try {
    const { category, paymentType, amount } = req.body;
    const tid = await Transaction.findOne().sort({ transactionId: -1 });
    const transactionId = tid ? tid.transactionId + 1 : 1;

    let color;
    if (category === "movies") {
      color = "red";
    } else if (category === "food") {
      color = "aqua";
    } else if (category === "music") {
      color = "lime";
    } else if (category === "sports") {
      color = "magenta";
    }

    const newTransaction = new Transaction({
      category,
      paymentType,
      amount,
      color,
      transactionId,
    });

    await newTransaction.save();
    return res.json({ success: true, transaction: newTransaction });
  } catch (error) {
    return res.json({ error: error.message });
  }
};

export const getAllTransaction = async (req, res) => {
  try {
    const allTransaction = await Transaction.find().sort({ transactionId: 1 });
    return res.json({ allTransaction });
  } catch (error) {
    return res.json({ error: error.message });
  }
};
