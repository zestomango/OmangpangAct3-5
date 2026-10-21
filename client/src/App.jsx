import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import GalleryPage from "./pages/GalleryPage";
import ManagePage from "./pages/ManagePage";
import { getProducts, createProduct, updateProduct, deleteProduct } from "./api";
import { defaultGamingProducts } from "./defaultProducts";

function App() {
  const [products, setProducts] = useState(defaultGamingProducts);
  const [view, setView] = useState("gallery");
  const [editingProduct, setEditingProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getProducts()
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setProducts(data);
        } else {
          setProducts(defaultGamingProducts);
        }
      })
      .catch(() => setError("Could not load products. Refresh in 1 minute."))
      .finally(() => setLoading(false));
  }, []);

  const saveProduct = async (data) => {
    try {
      if (editingProduct) {
        const updated = await updateProduct(editingProduct._id, data);
        setProducts((prev) =>
          prev.map((p) => (p._id === updated._id ? updated : p))
        );
        setEditingProduct(null);
      } else {
        const created = await createProduct(data);
        setProducts((prev) => [created, ...prev]);
      }
    } catch {
      // Fallback local save if server fails
      if (editingProduct) {
        setProducts((prev) =>
          prev.map((p) => (p._id === editingProduct._id ? { ...p, ...data } : p))
        );
        setEditingProduct(null);
      } else {
        const newProduct = {
          _id: "local-" + Date.now(),
          ...data,
        };
        setProducts((prev) => [newProduct, ...prev]);
      }
    }
  };

  const removeProduct = async (id) => {
    if (!confirm("Delete this product?")) return;
    try {
      await deleteProduct(id);
      setProducts((prev) => prev.filter((p) => p._id !== id));
      if (editingProduct?._id === id) setEditingProduct(null);
    } catch {
      setProducts((prev) => prev.filter((p) => p._id !== id));
      if (editingProduct?._id === id) setEditingProduct(null);
    }
  };

  const startEdit = (product) => {
    setEditingProduct(product);
    setView("manage");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <Navbar view={view} onChangeView={setView} />

      {error && (
        <div className="mx-auto mt-6 max-w-6xl px-6">
          <p className="rounded-xl bg-red-50 p-4 text-red-600">{error}</p>
        </div>
      )}

      {view === "gallery" ? (
        <GalleryPage products={products} loading={loading} />
      ) : (
        <ManagePage
          products={products}
          editingProduct={editingProduct}
          onSave={saveProduct}
          onCancel={() => setEditingProduct(null)}
          onEdit={startEdit}
          onDelete={removeProduct}
        />
      )}

      <footer className="py-10 text-center text-sm text-slate-400">
        Made by Marc Kristian Omangpang · INF 239
      </footer>
    </div>
  );
}

export default App;
