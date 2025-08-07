import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateForm,
  toggleBrand,
  submitForm,
  removeEntry,
} from "../../redux/slice/formSlice";

function FormPerokok() {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.form.form);
  const formList = useSelector((state) => state.form.list);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateForm({ field: name, value }));
  };

  const handleCheckbox = (e) => {
    dispatch(toggleBrand(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(submitForm());
    setShowModal(false);
  };

  return (
    <div className="min-h-screen p-4 bg-gray-100">
      <div className="text-right mb-4">
        <button
          onClick={() => setShowModal(true)}
          className="bg-green-700 text-white px-4 py-2 cursor-pointer rounded"
        >
          Input Data
        </button>
      </div>

      <main className="relative bg-black ">
        {showModal && (
          <div className="absolute inset-60 flex justify-center items-center z-50">
            <form
              onSubmit={handleSubmit}
              className="bg-white p-6 rounded shadow-lg w-full max-w-md space-y-4"
            >
              <h2 className="text-xl font-bold">Form Survei</h2>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className="w-full border px-4 py-2"
              />
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                placeholder="Age"
                className="w-full border px-4 py-2"
              />
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full border px-4 py-2"
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              <select
                name="smoker"
                value={formData.smoker}
                onChange={handleChange}
                className="w-full border px-4 py-2"
              >
                <option value="">Smoker?</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
              {formData.smoker === "Yes" && (
                <div className="space-x-2">
                  {["Djarum", "Sampoerna", "Gudang Garam"].map((brand) => (
                    <label key={brand}>
                      <input
                        type="checkbox"
                        value={brand}
                        checked={formData.brands.includes(brand)}
                        onChange={handleCheckbox}
                      />
                      <span className="ml-1">{brand}</span>
                    </label>
                  ))}
                </div>
              )}
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="bg-gray-300 px-4 py-2 rounded cursor-pointer"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded cursor-pointer"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        )}
      </main>

      <div className="bg-white p-6 rounded shadow-lg">
        <h2 className="text-xl font-bold mb-4">Form Summary</h2>
        <table className="table-auto w-full border border-gray-300">
          <thead>
            <tr>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Age</th>
              <th className="border px-4 py-2">Gender</th>
              <th className="border px-4 py-2">Smoker</th>
              <th className="border px-4 py-2">Brands</th>
              <th className="border px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {formList.map((item, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{item.name}</td>
                <td className="border px-4 py-2">{item.age}</td>
                <td className="border px-4 py-2">{item.gender}</td>
                <td className="border px-4 py-2">{item.smoker}</td>
                <td className="border px-4 py-2">{item.brands.join(", ")}</td>
                <td className="border px-4 py-2">
                  <button
                    onClick={() => dispatch(removeEntry(index))}
                    className="bg-red-600 text-white px-2 py-1 rounded"
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

export default FormPerokok;
