import React from "react";

const barang = [
  {
    nama: "Charger",
    price: "Rp 200.000",
    src: "/charger.jpg",
  },
  {
    nama: "Headset",
    price: "Rp 300.000",
    src: "/headser.jpg",
  },
  {
    nama: "Handphone",
    price: "Rp 2.000.000",
    src: "/hp.jpg",
  },
  {
    nama: "Keyboard",
    price: "Rp 500.000",
    src: "/keyboard.jpg",
  },
  {
    nama: "Laptop",
    price: "Rp 20.000.000",
    src: "/laptop.jpg",
  },
  {
    nama: "Mouse",
    price: "Rp 100.000",
    src: "/mouse.jpg",
  },
  {
    nama: "Playstation",
    price: "Rp 10.000.000",
    src: "/ps.jpg",
  },
  {
    nama: "Tablet",
    price: "Rp 4.000.000",
    src: "/tablet.jpg",
  },
];

function Product({ AddToCart }) {
  return (
    <div className="flex gap-5">
      {barang.map((el, idx) => (
        <div key={idx} className="border-1 rounded-xl p-3 bg-gray-100">
          <img
            src={el.src}
            alt={el.nama}
            className="h-40 w-40 p-2 rounded-full mb-3"
          />
          <hr />
          <h1>{el.nama}</h1>
          <p>{el.price}</p>
          <div
            className="bg-blue-600 rounded-3xl mt-2 px-1 cursor-pointer hover:bg-blue-400 text-white text-center"
            onClick={() => AddToCart(el)}
          >
            Tambah Keranjang
          </div>
        </div>
      ))}
    </div>
  );
}

console.log("onAddToCart", typeof onAddToCart)
export default Product;
