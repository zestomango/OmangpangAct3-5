import ProductGrid from "../components/ProductGrid";

function GalleryPage({ products, loading }) {
  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      <section className="relative mb-10 overflow-hidden rounded-3xl bg-[#1b2838] border border-[#2a475e] p-10 text-white shadow-xl md:p-14">
        <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[#2a475e]/20"></div>
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#66c0f4]">
          Product Gallery
        </p>
        <h2 className="mt-3 text-4xl font-bold md:text-5xl text-white">
          Discover Our Products
        </h2>
        <p className="mt-3 text-[#c7d5e0]">
          {products.length} items available · by Marc Kristian Omangpang
        </p>
      </section>

      {loading ? (
        <p className="py-20 text-center text-[#8f98a0]">Loading products...</p>
      ) : (
        <ProductGrid products={products} />
      )}
    </main>
  );
}

export default GalleryPage;
