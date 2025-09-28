const BASE_URL = "http://localhost:5000";

export const createOrder = async (amount) => {
  const res = await fetch(`${BASE_URL}/order/create`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ amount }),
  });
  return res.json();
};

export const verifyPayment = async (data) => {
  const res = await fetch(`${BASE_URL}/payment/verify`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const saveTransaction = async (data) => {
  const res = await fetch(`${BASE_URL}/transaction/save`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
};
