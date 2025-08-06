import React from "react";

function CartSummary({ cart, onRemove }) {
  return (
    <div className="flex justify-center">
      <div className="border-1 w-170 p-3 flex flex-col rounded-md my-10">
        <p className="font-bold mb-5 text-center">Keranjang</p>
        <table className="w-full">
          <thead>
            <tr className="flex justify-between">
              <th>Nama Barang</th>
              <th>Harga</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, idx) => (
              <tr key={idx} className="flex justify-between">
                <td>{item.nama}</td> <td>{item.price}</td>
                <td>
                  <button
                    onClick={() => onRemove(idx)}
                    className="bg-red-700 hover:bg-red-300 text-white px-2 rounded cursor-pointer my-2"
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CartSummary;
