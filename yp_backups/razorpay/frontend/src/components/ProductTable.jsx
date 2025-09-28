// components/ProductTable.jsx
import React from "react";

const ProductTable = ({ products, selectedProducts, toggleProduct, buySingle, buySingleViaPayPal }) => {
  return (
    <table className="w-full text-left border mt-4 rounded-xl overflow-hidden">
      <thead>
        <tr className="bg-indigo-100 text-indigo-800 font-semibold text-lg">
          <th className="p-3">Select</th>
          <th className="p-3">Product</th>
          <th className="p-3">Price (₹)</th>
          <th className="p-3">Actions</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id} className="border-t hover:bg-gray-50">
            <td className="p-3 text-center">
              <input
                type="checkbox"
                checked={selectedProducts.some((p) => p.id === product.id)}
                onChange={() => toggleProduct(product)}
              />
            </td>
            <td className="p-3">{product.name}</td>
            <td className="p-3">₹{product.price}</td>
            <td className="p-3 flex gap-2">
              <button
                className="bg-indigo-600 text-white px-3 py-1 rounded hover:bg-indigo-700"
                onClick={() => buySingle(product)}
              >
                Buy with Razorpay
              </button>
              <button
                className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                onClick={() => buySingleViaPayPal(product)}
              >
                Buy with PayPal
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;
