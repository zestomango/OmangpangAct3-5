const rawUrl = import.meta.env.VITE_API_URL || "http://localhost:5000";
const API_URL = rawUrl.replace(/\/+$/, "");

if (!import.meta.env.VITE_API_URL) {
  console.warn("VITE_API_URL is not explicitly set; defaulting to http://localhost:5000. Configure client/.env or Vercel settings when deploying.");
}

async function request(path, options = {}) {
  const url = `${API_URL}/api/products${path}`;
  const res = await fetch(url, {
    headers: { "Content-Type": "application/json" },
    ...options,
  });
  if (!res.ok) {
    throw new Error(`Request failed: ${res.status}`);
  }
  return res.json();
}

export const getProducts = () => request("");

export const createProduct = (data) =>
  request("", {
    method: "POST",
    body: JSON.stringify(data),
  });

export const updateProduct = (id, data) =>
  request(`/${id}`, {
    method: "PUT",
    body: JSON.stringify(data),
  });

export const deleteProduct = (id) =>
  request(`/${id}`, {
    method: "DELETE",
  });
