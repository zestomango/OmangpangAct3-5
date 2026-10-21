import { useState, useEffect } from "react";
import ImageUpload from "./ImageUpload";

const emptyForm = { name: "", price: "", description: "", image: "" };
const inputClass =
  "w-full rounded-xl border border-[#2a475e] bg-[#101822] px-4 py-3 text-white placeholder-[#626c75] outline-none " +
  "transition focus:border-[#66c0f4] focus:ring-2 focus:ring-[#66c0f4]/20";

function ProductForm({ editingProduct, onSubmit, onCancel }) {
  const [form, setForm] = useState(editingProduct || emptyForm);
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    setForm(editingProduct || emptyForm);
    setError("");
  }, [editingProduct]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, price, description, image } = form;
    if (!name.trim() || price === "" || !image) {
      return setError("Name, price, and image are required.");
    }
    setSaving(true);
    try {
      await onSubmit({
        name: name.trim(),
        price: Number(price),
        description,
        image,
      });
      setForm(emptyForm);
      setError("");
    } catch {
      setError("Could not save the product. Please try again.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 rounded-2xl bg-[#1b2838] border border-[#2a475e] p-6 shadow-md lg:sticky lg:top-24"
    >
      <h2 className="text-xl font-bold text-white">
        {editingProduct ? "Edit Product" : "Add Product"}
      </h2>

      <ImageUpload
        image={form.image}
        onChange={(image) => setForm((prev) => ({ ...prev, image }))}
        onError={setError}
      />

      <input
        name="name"
        placeholder="Product name"
        className={inputClass}
        value={form.name}
        onChange={handleChange}
      />
      <input
        name="price"
        type="number"
        min="0"
        placeholder="Price (₱)"
        className={inputClass}
        value={form.price}
        onChange={handleChange}
      />
      <textarea
        name="description"
        rows="3"
        placeholder="Short description"
        className={inputClass}
        value={form.description}
        onChange={handleChange}
      />

      {error && (
        <p className="rounded-xl bg-[#c23838]/20 border border-[#c23838]/40 p-3 text-sm text-[#ff8080]">
          {error}
        </p>
      )}

      <div className="flex gap-2">
        <button
          type="submit"
          disabled={saving}
          className="flex-1 rounded-xl bg-[#66c0f4] py-3 font-semibold text-[#101822] transition hover:bg-[#52ade2] disabled:opacity-50"
        >
          {saving ? "Saving..." : editingProduct ? "Update" : "Add Product"}
        </button>
        {editingProduct && (
          <button
            type="button"
            onClick={onCancel}
            className="flex-1 rounded-xl bg-[#2a475e] py-3 font-semibold text-white transition hover:bg-[#385873]"
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}

export default ProductForm;
